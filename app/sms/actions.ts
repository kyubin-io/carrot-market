"use server";

import validator from "validator";
import { z } from "zod";

const phoneSchema = z.string().trim().refine(validator.isMobilePhone);

const toekenSchema = z.coerce.number().min(100000).max(999999);

export async function smsLogin(prefState: any, formData: FormData) {
  console.log(toekenSchema.parse(formData.get("token")));
}
