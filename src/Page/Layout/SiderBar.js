import React from "react";
import { Sidebar } from "flowbite-react";
import { IoMdPricetags } from "react-icons/io";
import { GrSchedule } from "react-icons/gr";
import { MdEditDocument } from "react-icons/md";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
function Sider() {
  return (
    <>
      <div className="h-full bg-main text-white text-sm font-extrabold">
        <Sidebar aria-label="Sidebar with multi-level dropdown" aria-hidden>
          <Sidebar.Items>
            <Sidebar.ItemGroup className="flex flex-col gap-4">
              <Sidebar.Collapse
                className="font-medium flex gap-4 border-x border-slate-300"
                label="Quote"
                icon={IoMdPricetags}
              >
                <Sidebar.Item className=" ">
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    New Quote
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    My Quotations
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    Special Cargo Quotes
                  </Link>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse
                className="font-medium flex gap-8 border-x"
                icon={GrSchedule}
                label="Schedule"
              >
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    New Quote
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    New Quote
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    Special Cargo Quotes
                  </Link>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse
                className="font-medium flex gap-8 border-x"
                icon={MdEditDocument}
                label="Application"
              >
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    New Application
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    My Application
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    Application Template
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    Additional Services
                  </Link>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse
                className="font-medium flex gap-8 border-x"
                icon={MdOutlineDocumentScanner}
                label="Document"
              >
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    Add New Document
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    My Document
                  </Link>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse
                className="font-medium flex gap-8 border-x"
                icon={GrMapLocation}
                label="Tracking"
              >
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    By Application
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    By Container
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item>
                  <Link
                    className="justify-start font-normal text-sm px-2 border-l border-slate-300 hover:underline   "
                    to={"/"}
                  >
                    Vessel Tracking
                  </Link>
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}

export default Sider;
