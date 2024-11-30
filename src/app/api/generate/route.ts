import { loadTemplate } from "@/lib/templates";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { payload, selectedTemplate } = body;

  console.log(23435262572572);

  try {
    const ReactDOMServer = (await import("react-dom/server")).default;
    const generatedHtml = ReactDOMServer.renderToStaticMarkup(
      loadTemplate(selectedTemplate)(payload)
    );

    return NextResponse.json({ generatedHtml }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
