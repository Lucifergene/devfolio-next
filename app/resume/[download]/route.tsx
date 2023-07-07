import { RESUME_URL } from "../../../const";

export async function GET() {
  const data = await fetch(RESUME_URL).then((res) => res.blob());

  return new Response(data, {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": "attachment; filename=resume-avikkundu.pdf",
    },
  });
}
