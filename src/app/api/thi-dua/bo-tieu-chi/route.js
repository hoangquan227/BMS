import { nhomTieuChiThiDua, tieuChiThiDua } from "@/app/data/thi-dua-data";
import { created, ok } from "../_utils";

export async function GET() {
  return ok({ nhomTieuChi: nhomTieuChiThiDua, tieuChi: tieuChiThiDua });
}

export async function POST(request) {
  return created(request, "tiêu chí thi đua");
}
