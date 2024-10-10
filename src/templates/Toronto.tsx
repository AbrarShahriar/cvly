import { PdfPayloadType } from "@/types";
import { Document, Text, View, Page } from "@react-pdf/renderer";
import Html from "react-pdf-html";
import { createTw } from "react-pdf-tailwind";
import ReactDOMServer from "react-dom/server";
import parse from "html-react-parser";
import { parseDate, removePfromLi } from "@/lib/utils";

const tw = createTw({});

export const Toronto = (payload: PdfPayloadType) => {
  return (
    <Document>
      <Page size={"A4"} style={tw(`p-8 pt-12 font-[Lora] text-[11pt]`)}>
        <View>
          <Text
            style={tw(
              `text-center text-[24pt] border-b border-solid border-black text-[#1d3b62] font-[LoraBold]`
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
            {payload.phone} {payload.email}
          </Text>
          <Text>{payload.email}</Text>
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
          
          ${ReactDOMServer.renderToStaticMarkup(
            parse(removePfromLi(payload.summary))
          )}
          `}
          </Html>
        </View>

        <Text
          style={tw(
            "font-[LoraBold] border-b border-solid border-black text-[12pt] pl-2 text-[#1d3b62] mb-4"
          )}
        >
          PROFESSIONAL EXPERIENCE
        </Text>

        <View style={tw("px-2")}>
          {payload.workExperiences.map((el, i) => (
            <View key={i} style={tw("mb-2")}>
              <View
                style={tw(
                  "flex-row items-center justify-between font-[LoraBold]"
                )}
              >
                <Text>{el.employer.toUpperCase()}</Text>
                <Text>{el.location}</Text>
              </View>
              <View style={tw("flex-row items-center justify-between")}>
                <Text>{el.position}</Text>
                <Text style={tw("font-[LoraItalic]")}>
                  {parseDate(el.startDate)}-{parseDate(el.endDate)}
                </Text>
              </View>

              <Html style={tw("-mt-4")}>
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
          
          ${ReactDOMServer.renderToStaticMarkup(
            parse(removePfromLi(el.description))
          )}
          `}
              </Html>
            </View>
          ))}
        </View>

        <View>
          <Text
            style={tw(
              "font-[LoraBold] border-b border-solid border-black text-[12pt] pl-1 text-[#1d3b62] mb-4"
            )}
          >
            EDUCATION
          </Text>

          <View style={tw("px-2")}>
            {payload.educations.map((el, i) => (
              <View key={i} style={tw("mb-2")}>
                <View
                  style={tw(
                    "flex-row items-center justify-between font-[LoraBold]"
                  )}
                >
                  <Text>{el.school.toUpperCase()}</Text>
                  <Text>{el.location}</Text>
                </View>
                <View style={tw("flex-row items-center justify-between")}>
                  <Text>{el.degree}</Text>
                  <Text style={tw("font-[LoraItalic]")}>
                    {parseDate(el.startDate)}-{parseDate(el.endDate)}
                  </Text>
                </View>
                <Html style={tw("-mt-4")}>
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
          
          ${ReactDOMServer.renderToStaticMarkup(
            parse(removePfromLi(el.description))
          )}
          `}
                </Html>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
