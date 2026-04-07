import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const ADMIN_USER_ID = process.env.ADMIN_CLERK_USER_ID;

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "No autenticat" }, { status: 401 });
  if (ADMIN_USER_ID && userId !== ADMIN_USER_ID) {
    return NextResponse.json({ error: "Sense permisos" }, { status: 403 });
  }

  const body = await request.json();
  const { client_id, data, titol, tipus, assistents, durada_min, vod_url, backup_url, setup_notes, estat } = body;

  if (!client_id || !data || !titol || !tipus || !estat) {
    return NextResponse.json({ error: "Camps obligatoris incomplerts" }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("directes").insert({
    client_id,
    data,
    titol,
    tipus,
    assistents: assistents ?? null,
    durada_min: durada_min ?? null,
    vod_url: vod_url ?? null,
    backup_url: backup_url ?? null,
    setup_notes: setup_notes ?? null,
    estat,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
