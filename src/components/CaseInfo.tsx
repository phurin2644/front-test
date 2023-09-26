import React, { FC } from 'react';
import { Input } from '@mantine/core';
import { Tooltip } from '@mantine/core';

const CaseInfo: FC = () =>{
    return(
        <main className=" space-y-4 pt-3">
              <div className="flex flex-row space-x-4">
                <section className="basis-2/4">
                  <h1>Visit Date</h1>
                  <Input
                    style={{ borderBottomColor: "#434343" }}
                    variant="filled"
                    placeholder="Placeholder"
                    rightSection={
                      <Tooltip
                        label="This is public"
                        position="top-end"
                        withArrow
                      >
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
                    placeholder="Placeholder"
                    rightSection={
                      <Tooltip
                        label="This is public"
                        position="top-end"
                        withArrow
                      >
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
                    placeholder="Placeholder"
                    rightSection={
                      <Tooltip
                        label="This is public"
                        position="top-end"
                        withArrow
                      >
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
                    placeholder="Placeholder"
                    rightSection={
                      <Tooltip
                        label="This is public"
                        position="top-end"
                        withArrow
                      >
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
                      <Tooltip
                        label="This is public"
                        position="top-end"
                        withArrow
                      >
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
                      <Tooltip
                        label="This is public"
                        position="top-end"
                        withArrow
                      >
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
                      <Tooltip
                        label="This is public"
                        position="top-end"
                        withArrow
                      >
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
                placeholder="Placeholder"
                rightSection={
                  <Tooltip label="This is public" position="top-end" withArrow>
                    <div></div>
                  </Tooltip>
                }
              />
            </main>
    )
}

export default CaseInfo;