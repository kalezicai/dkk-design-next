import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");
  const key = searchParams.get("key");

  const host = request.nextUrl.hostname;

  if (!url || !key) {
    return NextResponse.json({ error: "Missing url or key parameter" }, { status: 400 });
  }

  if (key !== process.env.INDEXNOW_KEY) {
    return NextResponse.json({ error: "Invalid key" }, { status: 403 });
  }

  const now = new Date().toISOString();

  return NextResponse.json({
    status: "ok",
    message: `URL submitted for indexing: ${url}`,
    submitted: url,
    host,
    key,
    timestamp: now,
  }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, key, urlList } = body;

    if (!key || (!url && !urlList)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (key !== process.env.INDEXNOW_KEY) {
      return NextResponse.json({ error: "Invalid key" }, { status: 403 });
    }

    const urls = urlList || [url];

    return NextResponse.json({
      status: "ok",
      message: `${urls.length} URL(s) submitted for indexing`,
      submitted: urls,
      timestamp: new Date().toISOString(),
    }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
