import { giaTriConNguoi } from "@/app/data/thi-dua-data";
import { created, ok } from "../_utils";

export async function GET() {
  return ok(giaTriConNguoi);
}

export async function POST(request) {
  return created(request, "giá trị con người");
}
