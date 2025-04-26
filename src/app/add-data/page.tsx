"use client"

import { uploadData } from "@/lib/uploadData";
import { addComments } from "@/lib/uploadData";
export const AddData = () => {
    return <div>
        <button onClick={uploadData}>dodaj posty</button>
        <button onClick={addComments}>dodaj posty</button>
    </div>
};

export default AddData;