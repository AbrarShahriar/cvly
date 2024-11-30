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

const primaryColor = "#ae624f";

export const WhiteHouse = (payload: PdfPayloadType) => {
  // Arimo
  Font.register({
    family: "Arimo",
    src: "/fonts/Arimo/Arimo-Regular.ttf",
  });
  Font.register({
    family: "ArimoBold",
    src: "/fonts/Arimo/Arimo-Bold.ttf",
  });
  Font.register({
    family: "ArimoItalic",
    src: "/fonts/Arimo/Arimo-Italic.ttf",
  });
  return (
    <Document>
      <Page
        size={"A4"}
        style={tw(`p-8 pt-12 font-[Arimo] text-[10pt] leading-[1.15]`)}
      >
        {/* Personal */}
        <View style={tw(`flex-row items-center justify-between mb-6`)}>
          <Text
            style={tw(
              `text-left text-[18pt] bg-[${primaryColor}] text-white py-6 pl-8 w-[50%] font-[ArimoBold]`
            )}
          >
            {payload.firstName.toUpperCase()} {payload.lastName.toUpperCase()}
          </Text>
          <View style={tw(`flex text-right w-[50%]`)}>
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
        </View>
        <View style={tw(`px-2`)}>
          <View style={tw("flex-row items-start justify-between mb-6")}>
            <Text style={tw(`font-[ArimoBold] w-[20%] text-[${primaryColor}]`)}>
              SUMMARY
            </Text>
            <Text style={tw("w-[80%]")}>
              <Html>
                {`<style>
                .bold, strong {
                    font-family: "ArimoBold";
                    } 
                    .italic {
                        font-family: "ArimoItalic";
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
          <View style={tw("flex-row items-start justify-between mb-4")}>
            <Text
              style={tw(`flex font-[ArimoBold] w-[20%] text-[${primaryColor}]`)}
            >
              <Text>Professional</Text>
              <Text>Experience</Text>
            </Text>
            <View style={tw("w-[80%]")}>
              {payload.workExperiences.map((el, i) => (
                <View key={i} style={tw("mb-4")}>
                  <Text
                    style={tw(`font-[ArimoBold] text-[${primaryColor}] mb-2`)}
                  >
                    {el.position}
                  </Text>
                  <Text style={tw(`font-[ArimoItalic]`)}>
                    {el.employer}, {el.location}
                  </Text>
                  <Text style={tw("font-[ArimoItalic]")}>
                    {parseDate(el.startDate)}-
                    {el.endDate == new Date("1000-10-10").toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
                  </Text>

                  <Html style={tw("mt-4")}>
                    {`<style>
                    * {
                  margin: 0;
                  padding: 0;
                }
                .bold, strong {
                    font-family: "ArimoBold";
                } 
                .italic {
                    font-family: "ArimoItalic";
                } 
                p, span, ul, li {
                    font-size: 10pt;
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

          <View style={tw("flex-row items-start justify-between mb-6")}>
            <Text style={tw(`font-[ArimoBold] w-[20%] text-[${primaryColor}]`)}>
              EDUCATION
            </Text>
            <View style={tw("w-[80%]")}>
              {payload.educations.map((el, i) => (
                <View key={i}>
                  <Text style={tw(`font-[ArimoBold] text-[${primaryColor}]`)}>
                    {el.degree},{" "}
                    {el.endDate == new Date("1000-10-10").toDateString()
                      ? "Present"
                      : parseDate(el.endDate).toUpperCase()}
                  </Text>

                  <Html style={tw("-mt-4 -mb-4")}>
                    {`<style>
                .bold, strong {
                    font-family: "ArimoBold";
                    } 
                .italic {
                    font-family: "ArimoItalic";
                } 
                p, span, ul, li {
                    font-size: 10pt;
                }
                p, span, li, ul, strong {
                    font-family: "ArimoBold";
                    font-size: 10pt;
                    color: ${primaryColor};
                }
                
                li {
                    margin-bottom: 5px;
                    margin-left: -20px;
                }
          </style>
          
                ${renderToStaticMarkup(parse(removePfromLi(el.description)))}
                `}
                  </Html>
                  <Text style={tw(`font-[ArimoItalic]`)}>
                    {el.school}, {el.location}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Additional */}
          <View style={tw("flex-row items-start justify-between mb-6")}>
            <Text style={tw(`font-[ArimoBold] w-[20%] text-[${primaryColor}]`)}>
              ADDITIONAL
            </Text>
            <View style={tw("w-[80%] ")}>
              <Html>
                {`<style>
                * {
                  margin: 0;
                  padding: 0;
                }
                .bold, strong {
                    font-family: "ArimoBold";
                } 
                .italic {
                    font-family: "ArimoItalic";
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
