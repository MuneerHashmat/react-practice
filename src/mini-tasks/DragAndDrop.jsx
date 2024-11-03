import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Delete } from "@mui/icons-material";

const DragAndDrop = () => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => {
    wrapperRef.current.classList.add("dragover");
  };

  const onDragLeave = () => {
    wrapperRef.current.classList.remove("dragover");
  };

  const onDrop = () => {
    wrapperRef.current.classList.remove("dragover");
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    console.log(e.target.files);

    if (newFile) {
      const fileUrl = URL.createObjectURL(newFile);
      setFileList([...fileList, { id: uuidv4(), file: newFile, url: fileUrl }]);
    }
  };

  const deleteFile = (id) => {
    setFileList(fileList.filter((file) => file.id != id));
  };

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);
  return (
    <div>
      <div className="w-1/2 mx-auto mt-20">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-2xl">File Upload and Display</h1>

          <div
            ref={wrapperRef}
            className="p-3 rounded-lg border-2 border-dashed border-black w-fit relative"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <p>Drag `n` drop some files here, or click to select files</p>
            <input
              type="file"
              onChange={onFileDrop}
              className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
            />
          </div>

          {fileList.length > 0 && (
            <div className="mt-8 flex flex-col gap-3">
              <h1 className="text-3xl">Files:</h1>
              {fileList.map((fileItem) => (
                <div key={fileItem.id} className="relative">
                  <embed
                    src={fileItem.url}
                    type={fileItem.file.type}
                    className=" w-[500px] h-[500px]"
                  />
                  <button
                    onClick={() => deleteFile(fileItem.id)}
                    className="absolute top-2 right-3 bg-blue-400 rounded-full px-2 py-1"
                  >
                    <Delete />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
