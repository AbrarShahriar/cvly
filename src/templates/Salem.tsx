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

const primaryColor = "#2479b7";

export const Salem = (payload: PdfPayloadType) => {
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
        style={tw(`p-16 font-[Calibri] text-[10pt] leading-[1.3]`)}
      >
        {/* Personal */}
        <View
          style={tw(
            `flex-row items-start justify-between mb-8 border-b border-neutral-700`
          )}
        >
          <View style={tw(`flex text-[33pt]  w-[50%] leading-[1]`)}>
            <Text style={tw(`font-[Calibri]`)}>
              {payload.firstName.toUpperCase()}
            </Text>

            <Text style={tw(`font-[CalibriBold]`)}>
              {payload.lastName.toUpperCase()}
            </Text>
          </View>
          <View style={tw(`flex text-right w-[50%] leading-[1.2]`)}>
            <Text>{payload.location}</Text>
            <Text>{payload.phone}</Text>
            <Text>{payload.email}</Text>
            <Link
              style={tw(`text-[${primaryColor}]`)}
              src={payload.socialLinks[0].link}
            >
              {payload.socialLinks[0].title}
            </Link>
          </View>
        </View>
        <View style={tw(`px-2`)}>
          <View style={tw("flex items-start mb-8")}>
            <Text style={tw(`font-[CalibriBold] text-[13pt]`)}>SUMMARY</Text>
            <Text>
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
                            
                            ${renderToStaticMarkup(
                              parse(removePfromLi(payload.summary))
                            )}
          `}
              </Html>
            </Text>
          </View>

          {/* Professional */}
          <View style={tw("flexitems-start mb-6")}>
            <Text style={tw(`flex font-[CalibriBold] text-[13pt] mb-2`)}>
              EXPERIENCE
            </Text>
            <View>
              {payload.workExperiences.map((el, i) => (
                <View key={i} style={tw("mb-4")}>
                  <Text
                    style={tw(
                      `flex-row items-center font-[CalibriBold] text-[13pt] justify-start`
                    )}
                  >
                    <Text style={tw(`text-[${primaryColor}] mb-2`)}>
                      {el.position}{" "}
                    </Text>
                    <Text>| {el.employer}</Text>
                  </Text>
                  <Text>
                    {parseDate(el.startDate).toUpperCase()}-
                    {el.endDate == new Date("1000-10-10").toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
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
          
                ${renderToStaticMarkup(parse(removePfromLi(el.description)))}
                `}
                  </Html>
                </View>
              ))}
            </View>
          </View>

          {/* Education */}
          <View style={tw("flexitems-start mb-6")}>
            <Text style={tw(`flex font-[CalibriBold] text-[13pt] mb-2`)}>
              EDUCATION
            </Text>
            <View>
              {payload.educations.map((el, i) => (
                <View key={i}>
                  <Text
                    style={tw(
                      `flex-row items-center font-[CalibriBold] text-[13pt] justify-start`
                    )}
                  >
                    <Text style={tw(`text-[${primaryColor}] mb-2`)}>
                      {el.degree}{" "}
                    </Text>
                    <Text>| {el.school}</Text>
                  </Text>
                  <Text>
                    {parseDate(el.startDate).toUpperCase()}-
                    {el.endDate == new Date("1000-10-10").toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
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
          
                ${renderToStaticMarkup(parse(removePfromLi(el.description)))}
                `}
                  </Html>
                </View>
              ))}
            </View>
          </View>

          {/* Additional */}
          <View style={tw("flexitems-start mb-8")}>
            <Text style={tw(`flex font-[CalibriBold] text-[13pt]`)}>
              ADDITIONAL
            </Text>
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
          
                ${renderToStaticMarkup(
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
