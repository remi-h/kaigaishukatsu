"use client";
import Image from "next/image";
import * as Tabs from '@radix-ui/react-tabs';
import MiddleHigh from "../../components/TabContents/MiddleHigh";
import UniStudent from "../../components/TabContents/UniStudent";

const RoadTabs = () => (
  <Tabs.Root
    className="flex flex-col bg-box rounded-lg text-lg "
    defaultValue="tab1"
  >
    <Tabs.List
      className="flex justify-around"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        className="border-b-2 data-[state=active]:text-accent data-[state=active]:border-accent w-1/2	p-4"
        value="tab1"
      >
        中高生
      </Tabs.Trigger>
      <Tabs.Trigger
        className="border-b-2 data-[state=active]:text-accent data-[state=active]:border-accent w-1/2	p-4"
        value="tab2"
      >
        大学生
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content
      value="tab1"
      className="p-8"
    >
      <MiddleHigh />
    </Tabs.Content>
    <Tabs.Content
      value="tab2"
      className="p-8"
    >
      <UniStudent />
    </Tabs.Content>
  </Tabs.Root>
);

export default function Home() {
  return (
    <main>
      <h1>ROAD MAP</h1>
      <p>更新までしばらくお待ちください</p>
      <p className="text-xl mb-8">新卒で海外での就職を目指す場合のロードマップ</p>
      <RoadTabs />
    </main>
  );
}
