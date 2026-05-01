import { kyThiDua } from "@/app/data/thi-dua-data";
import { created, ok } from "../_utils";

export async function GET() {
  return ok(kyThiDua);
}

export async function POST(request) {
  return created(request, "kỳ thi đua");
}
