import { client } from "@/sanity/lib/client";
import FormButton from "./form-button";
import { RedirectType, redirect } from "next/navigation";
import { createNewEA, getEA, uploadFile } from "@/services/ea.service";
import { CreateNewEADTO, FileType } from "@/interfaces/dtos/new-ea.dto";
import { checkIfSignedUser } from "@/services/user.service";
interface UploadFormProps {
  userId: string;
}

// userId: string;
// title: string; //name
// banner?: string;
// images: string[];
// description: string;
// price: number;
// type: string;
// asset: string;
export default function UploadFormB({ userId }: UploadFormProps) {
  async function submit(formData: FormData) {
    "use server";
    const user = await checkIfSignedUser(userId);
    //parse form data
    const inputData = {
      name: formData.get("name"),
      banner: formData.get("bannerFile"),
      images: [
        (formData.get("image1") as File).name == "undefined"
          ? null
          : formData.get("image1"),
        (formData.get("image2") as File).name == "undefined"
          ? null
          : formData.get("image2"),
        (formData.get("image3") as File).name == "undefined"
          ? null
          : formData.get("image3"),
      ],
      description: formData.get("description"),
      price: formData.get("price"),
      file: formData.get("uploadFile"),
    };

    // file upload
    const fileRef = await uploadFile(inputData.file as File, "file");
    const bannerRef = await uploadFile(inputData.banner as File, "image");
    const image1Ref =
      inputData.images[0] == null
        ? null
        : await uploadFile(inputData.images[0] as File, "image");
    const image2Ref =
      inputData.images[1] == null
        ? null
        : await uploadFile(inputData.images[1] as File, "image");
    const image3Ref =
      inputData.images[2] == null
        ? null
        : await uploadFile(inputData.images[2] as File, "image");

    //parse input data

    const parsedData: CreateNewEADTO = {
      userId: user?.data._id,
      name: inputData.name as string,
      banner: bannerRef as FileType,
      images: [image1Ref, image2Ref, image3Ref] as FileType[],
      description: inputData.description as string,
      price: +(inputData.price as string),
      asset: fileRef as FileType,
    };

    await createNewEA(parsedData);

    redirect("/upload/success", RedirectType.replace);
  }
  return (
    <>
      <form
        className="grid grid-cols-1 gap-2 w-3xl bg-neutral-100 bg-opacity-25 p-4 rounded-xl"
        action={submit}
      >
        <div className="font-bold text-xl text-primary">
          กรอกแบบฟอร์มนี้เพื่อขาย
        </div>
        <div className="form-control">
          <label className="label" htmlFor="name">
            ชื่อ
          </label>
          <input
            type="text"
            name="name"
            className="input input-sm max-w-md"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">ราคา</label>
          <input
            type="number"
            name="price"
            className="input input-sm max-w-md"
            required
          />
          <label className="label">บาท</label>
        </div>
        <div className="form-control">
          <label htmlFor="uploadFile" className="label">
            ไฟล์
          </label>
          <input
            name="uploadFile"
            type="file"
            className="file-input file-input-bordered w-full max-w-md file-input-sm"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="bannerFile" className="label">
            banner
          </label>
          <input
            name="bannerFile"
            type="file"
            accept="image/png, image/jpeg, image/png"
            className="file-input file-input-bordered w-full max-w-md file-input-sm"
            required
          />
        </div>

        <div className="form-group">
          <label>รูปภาพ</label>
          <div className="form-control">
            <input
              name="image1"
              type="file"
              accept="image/png, image/jpeg, image/png"
              className="file-input file-input-bordered w-full max-w-md file-input-sm"
              required
            />
          </div>
          <div className="form-control">
            <input
              name="image2"
              type="file"
              accept="image/png, image/jpeg, image/png"
              className="file-input file-input-bordered w-full max-w-md file-input-sm"
            />
          </div>
          <div className="form-control">
            <input
              name="image3"
              type="file"
              accept="image/png, image/jpeg, image/png"
              className="file-input file-input-bordered w-full max-w-md file-input-sm"
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="description">รายละเอียด</label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            rows={3}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">สัญญาอนุญาติให้สิทธิ์</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">หลักเกณฑ์สำหรับชุมชน</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">ข้อตกลงและเงื่อนไข</span>
            </label>
          </div>
        </div>

        <FormButton />
      </form>
    </>
  );
}
