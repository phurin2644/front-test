import { Button, Input, Tooltip } from "@mantine/core";
import { Edit } from "tabler-icons-react";
import { CaseInfo } from "../data/Patient";

function CustomDrawer({patient}:{patient:CaseInfo | undefined}) {
    const formattedDate = new Date(patient?.createdAt || "").toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });

      const hours = String(new Date(patient?.createdAt || "").getHours()).padStart(2, "0");
      const minutes = String(new Date(patient?.createdAt || "").getMinutes()).padStart(2, "0");
      const seconds = String(new Date(patient?.createdAt || "").getSeconds()).padStart(2, "0");
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      const fullFormattedDate = `${formattedDate} ${formattedTime}`;
    

    return(
        <div className="px-4">
                    <div className="flex justify-end">
                        <Button className="bg-stone-200 p-0 m-0 px-2 hover:bg-stone-300">
                            <Edit size={20} strokeWidth={2} className="p-0 m-0" />
                        </Button>
                    </div>

                    {/* Drawer content */}
                    <main className=" space-y-4 pt-3">
                        <div className="flex flex-row space-x-4">
                            <section className="basis-2/4">
                                <h1>Visit Date</h1>
                                <Input
                                    style={{ borderBottomColor: "#434343" }}
                                    variant="filled"
                                    value={fullFormattedDate}
                                    placeholder="Placeholder"
                                    rightSection={
                                        <Tooltip label="This is public" position="top-end" withArrow>
                                            <div></div>
                                        </Tooltip>
                                    }
                                />
                            </section>
                            <section className="basis-2/4">
                                <h1>VN</h1>
                                <Input
                                    style={{ borderBottomColor: "#434343" }}
                                    variant="filled"
                                    value={patient?.visitNumber}
                                    placeholder="Placeholder"
                                    rightSection={
                                        <Tooltip label="This is public" position="top-end" withArrow>
                                            <div></div>
                                        </Tooltip>
                                    }
                                />
                            </section>
                        </div>

                        <h1>HN</h1>
                        <Input
                            style={{ borderBottomColor: "#434343" }}
                            variant="filled"
                            value={patient?.hospitalNumber}
                            placeholder="Placeholder"
                            rightSection={
                                <Tooltip label="This is public" position="top-end" withArrow>
                                    <div></div>
                                </Tooltip>
                            }
                        />
                        <div className="flex flex-row space-x-4">
                            <section className="basis-2/4">
                                <h1>First Name</h1>
                                <Input
                                    style={{ borderBottomColor: "#434343" }}
                                    variant="filled"
                                    value={patient?.firstName}
                                    placeholder="Placeholder"
                                    rightSection={
                                        <Tooltip label="This is public" position="top-end" withArrow>
                                            <div></div>
                                        </Tooltip>
                                    }
                                />
                            </section>
                            <section className="basis-2/4">
                                <h1>Last Name</h1>
                                <Input
                                    style={{ borderBottomColor: "#434343" }}
                                    variant="filled"
                                    value={patient?.lastName}
                                    placeholder="Placeholder"
                                    rightSection={
                                        <Tooltip label="This is public" position="top-end" withArrow>
                                            <div></div>
                                        </Tooltip>
                                    }
                                />
                            </section>
                        </div>

                        <div className="flex flex-row space-x-4 ">
                            <section className="basis-2/4">
                                <h1>E</h1>
                                <Input
                                    style={{ borderBottomColor: "#434343" }}
                                    variant="filled"
                                    placeholder="Placeholder"
                                    rightSection={
                                        <Tooltip label="This is public" position="top-end" withArrow>
                                            <div></div>
                                        </Tooltip>
                                    }
                                />
                            </section>
                            <section className="basis-1/1">
                                <h1>V</h1>
                                <Input
                                    style={{ borderBottomColor: "#434343" }}
                                    variant="filled"
                                    placeholder="Placeholder"
                                    rightSection={
                                        <Tooltip label="This is public" position="top-end" withArrow>
                                            <div></div>
                                        </Tooltip>
                                    }
                                />
                            </section>
                            <section className="basis-2/4">
                                <h1>N</h1>
                                <Input
                                    style={{ borderBottomColor: "#434343" }}
                                    variant="filled"
                                    placeholder="Placeholder"
                                    rightSection={
                                        <Tooltip label="This is public" position="top-end" withArrow>
                                            <div></div>
                                        </Tooltip>
                                    }
                                />
                            </section>
                        </div>

                        <h1>Fast Track</h1>
                        <Input
                            style={{ borderBottomColor: "#434343" }}
                            variant="filled"
                            placeholder="Placeholder"
                            rightSection={
                                <Tooltip label="This is public" position="top-end" withArrow>
                                    <div></div>
                                </Tooltip>
                            }
                        />
                        <h1>Create</h1>
                        <Input
                            style={{ borderBottomColor: "#434343" }}
                            variant="filled"
                            value={fullFormattedDate}
                            placeholder="Placeholder"
                            rightSection={
                                <Tooltip label="This is public" position="top-end" withArrow>
                                    <div></div>
                                </Tooltip>
                            }
                        />
                        <h1>Update</h1>
                        <Input
                            style={{ borderBottomColor: "#434343" }}
                            variant="filled"
                            value={patient?.updatedAt}
                            placeholder="Placeholder"
                            rightSection={
                                <Tooltip label="This is public" position="top-end" withArrow>
                                    <div></div>
                                </Tooltip>
                            }
                        />
                    </main>
                </div>
    );
}
export default CustomDrawer