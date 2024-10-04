// components/profile/Profile_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"

const Profile_02 = () => {
  return (
    <>
      <PageContent className="bg-bgLightBlue">
        <section className="w-1200 mx-auto">
          <ContentHeadline
            entitle="Profile"
            maintitle="会社概要"
            entitleClassName=""
            titleClassName=""
          />
          <div className="mt-16 bg-white flex">
            <div>
              <dl className="flex">
                <dt>社名</dt>
                <dd>企業名</dd>
              </dl>
              <dl className="flex">
                <dt>設立</dt>
                <dd>0000年00月00日</dd>
              </dl>
              <dl className="flex">
                <dt>資本金</dt>
                <dd>000円</dd>
              </dl>
              <dl className="flex">
                <dt>所在地</dt>
                <dd>000-000○○県○○市○○町00-00○○○○○ビル00F</dd>
              </dl>
              <dl className="flex">
                <dt>電話番号・FAX</dt>
                <dd>電話番号　000-000-0000／FAX　000-000-0000</dd>
              </dl>
              <dl className="flex">
                <dt>FAX</dt>
                <dd>000-000-0000</dd>
              </dl>
              <dl className="flex">
                <dt>代表者</dt>
                <dd>氏名　氏名</dd>
              </dl>
              <dl className="flex">
                <dt>URL</dt>
                <dd>example@aa.aaaa</dd>
              </dl>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707453!2d139.76454987585436!3d35.68124052997326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sfr!4v1728031590235!5m2!1sja!2sfr"
                width="1200"
                height="400"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <p>
                000-000
                <br />
                ○○県○○市○○町00-00○○○○○ビル00F
              </p>
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Profile_02
