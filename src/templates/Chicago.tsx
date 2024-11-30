import { PdfPayloadType } from "@/types";
import {
  Document,
  Text,
  View,
  Page,
  Link,
  Font,
} from "@react-pdf/renderer/lib/react-pdf.browser.min";
import Html from "react-pdf-html";
import { createTw } from "react-pdf-tailwind";
import parse from "html-react-parser";
import { parseDate, removePfromLi, renderToStaticMarkup } from "@/lib/utils";
import { TIME_PRESENT } from "@/components/ui/datetimepicker";

const tw = createTw({});

const primaryColor = "#1d3b62";

export const Chicago = (payload: PdfPayloadType) => {
  Font.register({
    family: "Lora",
    src: "/fonts/Lora/Lora-Regular.ttf",
  });
  Font.register({
    family: "LoraBold",
    src: "/fonts/Lora/Lora-Bold.ttf",
  });
  Font.register({
    family: "LoraItalic",
    src: "/fonts/Lora/Lora-Italic.ttf",
  });
  console.log("Instantiating Chicago");

  return (
    <Document>
      <Page size={"A4"} style={tw(`p-8 pt-12 font-[Lora] text-[11pt]`)}>
        <View>
          <Text
            style={tw(
              `text-center text-[24pt] border-b border-solid border-black text-[${primaryColor}] font-[LoraBold]`
            )}
          >
            {payload.firstName} {payload.lastName}
          </Text>
        </View>
        <View
          style={tw(
            "text-[11pt] text-center  border-b border-solid border-black py-2"
          )}
        >
          <Text>{payload.location}</Text>
          <Text>
            {payload.email} | {payload.phone}
          </Text>
          <Link
            style={tw(`text-[${primaryColor}]`)}
            src={payload.socialLinks[0].link}
          >
            {payload.socialLinks[0].title}
          </Link>
        </View>
        <View style={tw(" -mt-2 text-center px-2")}>
          <Html>
            {`<style>
                .bold, strong {
                    font-family: "LoraBold";
                } 
                .italic {
                    font-family: "LoraItalic";
                } 
                p, span, ul, li {
                    font-size: 11pt;
                }
          </style>
          
          ${renderToStaticMarkup(parse(removePfromLi(payload.summary)))}
          `}
          </Html>
        </View>

        {/* Professional */}
        <View style={tw("mb-4")}>
          <Text
            style={tw(
              `font-[LoraBold] border-b border-solid border-black text-[12pt] pl-2 text-[${primaryColor}] mb-4`
            )}
          >
            PROFESSIONAL EXPERIENCE
          </Text>

          <View style={tw("px-2")}>
            {payload.workExperiences.map((el, i) => (
              <View key={i} style={tw("mb-6")}>
                <View
                  style={tw(
                    "flex-row items-center justify-between font-[LoraBold]"
                  )}
                >
                  <Text>{el.employer.toUpperCase()}</Text>
                  <Text>{el.location}</Text>
                </View>
                <View style={tw("flex-row items-center justify-between mb-4")}>
                  <Text>{el.position}</Text>
                  <Text style={tw("font-[LoraItalic]")}>
                    {parseDate(el.startDate)}-
                    {el.endDate == new Date("1000-10-10").toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
                  </Text>
                </View>

                <Html>
                  {`<style>
                * {
              margin: 0;
              padding:0;
              }
                .bold, strong {
                    font-family: "LoraBold";
                } 
                .italic {
                    font-family: "LoraItalic";
                } 
                p, span, ul, li {
                    font-size: 11pt;
                }
          </style>
          
          ${renderToStaticMarkup(parse(removePfromLi(el.description)))}
          `}
                </Html>
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={tw("mb-4")}>
          <Text
            style={tw(
              `font-[LoraBold] border-b border-solid border-black text-[12pt] pl-1 text-[${primaryColor}] mb-4`
            )}
          >
            EDUCATION
          </Text>

          <View style={tw("px-2")}>
            {payload.educations.map((el, i) => (
              <View key={i} style={tw("mb-4")}>
                <View
                  style={tw(
                    "flex-row items-center justify-between font-[LoraBold]"
                  )}
                >
                  <Text>{el.school.toUpperCase()}</Text>
                  <Text>{el.location}</Text>
                </View>
                <View style={tw("flex-row items-center justify-between mb-2")}>
                  <Text>{el.degree}</Text>
                  <Text style={tw("font-[LoraItalic]")}>
                    {parseDate(el.startDate)}-
                    {el.endDate == new Date("1000-10-10").toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
                  </Text>
                </View>
                <Html>
                  {`<style>
                  * {
              margin: 0;
              padding:0;
              }
                .bold, strong {
                    font-family: "LoraBold";
                } 
                .italic {
                    font-family: "LoraItalic";
                } 
                p, span, ul, li {
                    font-size: 11pt;
                }
          </style>
          
          ${renderToStaticMarkup(parse(removePfromLi(el.description)))}
          `}
                </Html>
              </View>
            ))}
          </View>
        </View>

        {/* Additional */}
        <View>
          <Text
            style={tw(
              `font-[LoraBold] border-b border-solid border-black text-[12pt] pl-1 text-[${primaryColor}] mb-4`
            )}
          >
            ADDITIONAL INFORMATION
          </Text>

          <View style={tw("px-2")}>
            <Html>
              {`<style>
              * {
              margin: 0;
              padding:0;
              }
                .bold, strong {
                    font-family: "LoraBold";
                } 
                .italic {
                    font-family: "LoraItalic";
                } 
                p, span, ul, li {
                    font-size: 11pt;
                }
          </style>
          
          ${renderToStaticMarkup(parse(removePfromLi(payload.additional)))}
          `}
            </Html>
          </View>
        </View>
      </Page>
    </Document>
  );
};
