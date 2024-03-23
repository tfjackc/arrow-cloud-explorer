import {Button} from "@nextui-org/react";
export default function Home() {

    async function create(formData: FormData) {
        'use server';
        const file = formData.get('upload_file') as File;
        console.log('file', file);
    }

    return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen px-4 m-2">
          <form action={create}>
              <p className="mb-6">
                  <input type="file"
                         name='upload_file'
                         required
                  />
              </p>
              <Button color="primary" type="submit">Submit</Button>
          </form>
      </div>
    </main>
  );
}
