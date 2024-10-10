import { PdfPayloadType } from "@/types";

export const templates = {
  toronto: (payload: PdfPayloadType) =>
    `<html>
      <style>
        .lora {
          font-family: "Lora";
        }

        .text-center {
          text-align: center;
        }

        .bold,
        strong {
          font-family: "LoraBold";
        }
        .italic {
          font-family: "LoraItalic";
        }

        .border-bottom {
          border-bottom: 1px solid black;
        }

        .text-blue-900 {
          color: #1d3b62;
        }

        .pl-1 {
          padding-left: 5pt;
        }

        .text-xl {
          font-size: 24pt;
        }
        .text-lg {
          font-size: 12pt;
        }

        .text-md,
        p {
          font-size: 11pt;
        }

        .-mb-1 {
          margin-bottom: -5pt;
        }
        .-mb-2 {
          margin-bottom: -10pt;
        }
        .-mb-3 {
          margin-bottom: -15pt;
        }
        .-mb-4 {
          margin-bottom: -20pt;
        }

        .-mt-1 {
          margin-top: -5pt;
        }
        .-mt-2 {
          margin-top: -10pt;
        }
        .-mt-3 {
          margin-top: -15pt;
        }
        .-mt-4 {
          margin-top: -20pt;
        }
        .-mt-6 {
          margin-top: -30pt;
        }

        .flex-row {
          display: flex;
          flex-direction: row;
        }
        .items-center {
          align-items: center;
        }
        .justify-between {
          justify-content: space-between;
        }
        .text-right {
          text-align: right;
        }
        .px-1 {
          padding: 0 5pt;
        }
        .px-2 {
          padding: 0 10pt;
        }
          .w-full {
            width: 100%;
          }

        

        </style>
      <body class="lora">
        <span class="w-full text-center bold text-xl border-bottom text-blue-900">
          ${payload.firstName} ${payload.lastName}
        </span>
        <br />
        <span class="w-full text-md text-center">
          ${payload.location} <br />
          ${payload.phone} <br />
          ${payload.email}
        </span>
        <hr />
        <div class="text-md text-center px-2">${payload.summary}</div>

        <div class="">
          <h3
          class="bold text-lg border-bottom pl-1 text-blue-900">
            PROFESSIONAL EXPERIENCE
          </h3>
          ${payload.workExperiences
            .map(
              (el) =>
                `<div class="px-1">
              <div class="flex-row items-center justify-between">
                <p>
                  <span class="bold">
                    ${el.employer.toUpperCase()}
                  </span><br />${el.position}
                </p>
                <p class="text-right">
                  <span class="bold">
                    ${el.location}
                  </span>
                  <br />
                  <span class="italic">
                    ${el.startDate}-${el.endDate}
                  </span>
                </p>
              </div>
              <p class="">
                ${el.description}
              </p>
            </div>`
            )
            .join("")}
        </div>

        <div class="">
          <h3 class="bold text-lg border-bottom pl-1 text-blue-900">
            EDUCATION
          </h3>
          ${payload.educations
            .map(
              (el) =>
                `<div class="px-1">
              <div
                class="flex-row items-center justify-between">
                <p>
                  <span class="bold">
                    ${"Bachelor of Science in Computer Science & Engineering,".toUpperCase()}
                  </span><br />${el.school}
                </p>
                <p class="text-right">
                  <span class="bold">
                    ${el.location}
                  </span>
                  <br />
                  <span class="italic">
                    ${el.startDate}-${el.endDate}
                  </span>
                </p>
              </div>
              <p class="">
                ${el.description}
              </p>
            </div>`
            )
            .join("")}
        </div>
      </body>
    </html>`,
};
