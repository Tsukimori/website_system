// components/profile/Profile_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ProfileCard from "@/components/ui/ItemCard/ProfileCard"

const Profile_01 = () => {
  return (
    <>
      <PageContent className="bg-bgLightBlue">
        <section className="md:w-1200 mx-auto">
          <ContentHeadline
            entitle="Profile"
            maintitle="会社概要"
            entitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="mt-16 bg-white grid grid-cols-2 gap-x-20 p-10">
            <div>
              <ProfileCard label="社名" value="企業名" />
              <ProfileCard label="設立" value="0000年00月00日" />
              <ProfileCard label="資本金" value="000円" />
              <ProfileCard label="所在地" value={`000-000\n○○県○○市○○町00-00\n○○○○○ビル00F`} />
              <ProfileCard label="電話番号" value="000-000-0000" />
              <ProfileCard label="FAX" value="000-000-0000" />
              <ProfileCard label="代表者" value="氏名　氏名" />
              <ProfileCard label="URL" value="example@aa.aaaa" />
            </div>
            <div>
              <ProfileCard label="役員" value={`役職　○○○○○○\n役職　○○○○○○\n役職　○○○○○○`} />
              <ProfileCard label="従業員" value="0000名" />
              <ProfileCard label="事業内容" value={`○○○○○○○○○○\n○○○○○○○○○`} />
              <ProfileCard label="主要取引先" value={`○○○○○○○○○○\n○○○○○○○○○`} />
              <ProfileCard label="主要取引銀行" value={`○○○○○○○○○○\n○○○○○○○○○`} />
            </div>
          </div>
          <div className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707453!2d139.76454987585436!3d35.68124052997326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sfr!4v1728031590235!5m2!1sja!2sfr"
              width="1200"
              height="400"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
            />
            <p className="mt-4 font-light">
              000-000
              <br />
              ○○県○○市○○町00-00○○○○○ビル00F
            </p>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Profile_01
