import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    // const connection = await mysql.createConnection({
    //   host: 'srv762003.hstgr.cloud:3000',
    //   user: 'root',
    //   password: 'sua_senha',
    //   database: 'nome_banco',
    // });
  
    // const [rows] = await connection.query('SELECT * FROM usuarios');
    return NextResponse.json({ idEcho: params.id });
  }