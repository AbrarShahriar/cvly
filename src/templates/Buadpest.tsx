import { PdfPayloadType } from "@/types";
import { Document, Text, View, Page, Link } from "@react-pdf/renderer";
import Html from "react-pdf-html";
import { createTw } from "react-pdf-tailwind";
import ReactDOMServer from "react-dom/server";
import parse from "html-react-parser";
import { parseDate, removePfromLi } from "@/lib/utils";
import { Font } from "@react-pdf/renderer/lib/react-pdf.browser.min";
import { TIME_PRESENT } from "@/components/ui/datetimepicker";

const tw = createTw({});

const bgColor = "#eeeaf4";
const textColor = "#262626";
const secondaryTextColor = "#5a5a5a";

export const Budapest = (payload: PdfPayloadType) => {
  Font.register({
    family: "Calibri",
    src: "/fonts/Calibri/Calibri.ttf",
  });
  Font.register({
    family: "CalibriBold",
    src: "/fonts/Calibri/Calibri-Bold.ttf",
  });
  Font.register({
    family: "CalibriItalic",
    src: "/fonts/Calibri/Calibri-Italic.ttf",
  });

  return (
    <Document>
      <Page
        size={"A4"}
        style={tw(
          `p-16 font-[Calibri] text-[10pt] leading-[1.5] text-[${secondaryTextColor}]`
        )}
      >
        {/* Personal */}
        <View style={tw(`flex items-center justify-between mb-6`)}>
          <View style={tw(`bg-[${bgColor}] w-full   mb-4`)}>
            <Text
              style={tw(
                `text-center text-[35pt] text-[${textColor}] translate-y-[15pt]`
              )}
            >
              {payload.firstName} {payload.lastName}
            </Text>
          </View>
          <View style={tw(`flex-row items-center text-right w-[50%]`)}>
            <Text>
              {payload.email} • {payload.location} • {payload.phone} •{" "}
            </Text>
            <Link
              style={tw(`text-[${textColor}]`)}
              src={payload.socialLinks[0].link}
            >
              {payload.socialLinks[0].title}
            </Link>
          </View>
        </View>
        <View style={tw(`px-2`)}>
          <View style={tw("flex-row items-start justify-between mb-6")}>
            <Text style={tw("w-full")}>
              <Html>
                {`<style>
                .bold, strong {
                    font-family: "CalibriBold";
                    } 
                    .italic {
                        font-family: "CalibriItalic";
                        } 
                        p, span, ul, li {
                            font-size: 10pt;
                            }
                            </style>
                            
                            ${ReactDOMServer.renderToStaticMarkup(
                              parse(removePfromLi(payload.summary))
                            )}
          `}
              </Html>
            </Text>
          </View>

          {/* Professional */}
          <View style={tw("flex")}>
            <View style={tw(`bg-[${bgColor}] mb-4 w-[${16 * 4.5}pt]`)}>
              <Text
                style={tw(
                  `text-[16pt]  translate-y-[6pt] text-[${textColor}] `
                )}
              >
                Experience
              </Text>
            </View>
            <View>
              {payload.workExperiences.map((el, i) => (
                <View key={i} style={tw("mb-4")}>
                  <Text>
                    {parseDate(el.startDate).toUpperCase()}–
                    {el.endDate == TIME_PRESENT.toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
                  </Text>
                  <Text style={tw(`font-[CalibriBold] text-[${textColor}]`)}>
                    {el.position} | {el.employer} | {el.location}
                  </Text>

                  <Html>
                    {`<style>
                    * {
                  margin: 0;
                  padding: 0;
                }
                .bold, strong {
                    font-family: "CalibriBold";
                } 
                .italic {
                    font-family: "CalibriItalic";
                } 
                p, span, ul, li {
                    font-size: 10pt;
                }
                li {
                    margin-bottom: 5px;
                    margin-left: -20px;
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

          {/* Education */}

          <View style={tw("flex")}>
            <View style={tw(`bg-[${bgColor}] mb-4 w-[${16 * 4.5}pt]`)}>
              <Text
                style={tw(
                  `text-[16pt]  translate-y-[6pt] text-[${textColor}] `
                )}
              >
                Education
              </Text>
            </View>
            <View>
              {payload.educations.map((el, i) => (
                <View key={i} style={tw("mb-4")}>
                  <Text style={tw(`text-[${secondaryTextColor}]`)}>
                    {parseDate(el.startDate).toUpperCase()}-
                    {el.endDate == TIME_PRESENT.toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
                  </Text>
                  <Text style={tw(`font-[CalibriBold] text-[${textColor}]`)}>
                    {el.degree} | {el.school} | {el.location}
                  </Text>
                  <Html>
                    {`<style>
* {
                  margin: 0;
                  padding: 0;
                }
                .bold, strong {
                    font-family: "CalibriBold";
                    } 
                .italic {
                    font-family: "CalibriItalic";
                } 
                p, span, ul, li {
                    font-size: 10pt;
                }
                
                li {
                    margin-bottom: 5px;
                    margin-left: -20px;
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

          {/* Additional */}
          <View style={tw("flex mb-6")}>
            <View style={tw(`bg-[${bgColor}] mb-4 w-[${35 * 4.5}pt]`)}>
              <Text
                style={tw(
                  `text-[16pt]  translate-y-[6pt] text-[${textColor}] `
                )}
              >
                Additional Information
              </Text>
            </View>
            <View>
              <Html>
                {`<style>
                * {
                  margin: 0;
                  padding: 0;
                }
                .bold, strong {
                    font-family: "CalibriBold";
                    } 
                .italic {
                    font-family: "CalibriItalic";
                } 
                p, span, ul, li {
                    font-size: 10pt;
                }
                
                li {
                    margin-bottom: 5px;
                    margin-left: -20px;
                }
          </style>
          
                ${ReactDOMServer.renderToStaticMarkup(
                  parse(removePfromLi(payload.additional))
                )}
                `}
              </Html>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
