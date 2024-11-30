import { loadTemplate } from "@/lib/templates";
import { NextRequest, NextResponse } from "next/server";

//  WIP
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { payload, selectedTemplate } = body;

  try {
    const ReactDOMServer = (await import("react-dom/server")).default;
    const generatedHtml = ReactDOMServer.renderToStaticMarkup(
      loadTemplate(selectedTemplate)(payload)
    );

    return NextResponse.json({ generatedHtml }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
