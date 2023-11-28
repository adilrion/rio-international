import { renderStars } from "@/lib/renderStars";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";

import { MdOutlineReportGmailerrorred } from "react-icons/md";


const Comments = () => {
    return (
        <div className="flex gap-2 py-5 border-b">
            <div className="min-w-[60px] h-[60px] rounded-full shadow overflow-hidden">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGewRpHiFqi1F8YMBQyzxuUecyQPCBEbTn3Q&usqp=CAU"
                    alt=""
                    className="w-full h-full"
                />
            </div>
            <div>
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-[13px]">Raiful Islam Ratul</h1>
                        <p className="inline-flex items-center text-[13px] text-orange-500">
                            {" "}
                            {renderStars(23)}
                            <span className="text-gray-800 text-[12px] ml-2 font-thin">
                                {" "}
                                (20)
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-y-1 text-gray-600">
                        <p className="text-[10px] ">5 Month ago</p>
                        <MdOutlineReportGmailerrorred />
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit, sequi fugit reprehenderit magni quasi, adipisci
                    facilis id repellendus impedit esse dolor quaerat numquam
                    similique. Quibusdam, illo necessitatibus officia provident
                    accusantium libero harum, repellendus deleniti unde sequi
                    rem vitae dolore. Recusandae neque est repellendus
                    consectetur quis eaque ab facere nesciunt? Rem quas et esse
                    architecto officia voluptatem tempore ab. Dignissimos nam
                    nulla laborum eligendi provident dolor? Repellendus,
                    voluptas dignissimos. Illo nihil, quaerat et alias, quasi
                    temporibus nostrum dolore aliquid nulla cumque excepturi
                    molestiae facilis amet? Assumenda quod, dignissimos
                    obcaecati iste itaque temporibus numquam consectetur
                    consequuntur, eaque laborum unde impedit. Impedit, pariatur?
                </p>

                <div>
                    <div className="like flex items-center text-gray-500 gap-5">
                        <div className="flex items-center justify-center gap-1">
                            <AiTwotoneLike />
                            <p>11</p>
                        </div>
                        <div className="flex  items-center justify-center gap-1">
                            <AiTwotoneDislike />

                            <p>23</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;