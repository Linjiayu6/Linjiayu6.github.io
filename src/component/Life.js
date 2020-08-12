import React from 'react'

const list = [
    {
        id: 2020,
        tags: ['🇬🇧 UK', 'SHANG HAI@CHINA']
    }, 
    {
        id: 2019,
        tags: ['🇵🇭 PHILIPPINES', 'YUN NAN@CHINA', '🇯🇵 JAPAN']
    },
    {
        id: 2018,
        tags: ['🇹🇭 THAILAND', 'SHANG HAI@CHINA', '🇵🇹 PORTUGAL', '🇪🇸 SPAIN']
    }, 
    {
        id: 2017,
        tags: ['TIAN JING@CHINA', '🇮🇱 ISRAEL', '🇯🇴JORDAN']
    },
    {
        id: 2016,
        tags: ['HARBIN@CHINA', '🇦🇪 DUBAI', '🇿🇦 SOUTH AFRICA']
    },
    {
        id: 2015,
        tags: ['🇭🇰 HONG KONG@CHINA', 'GUANG ZHOU@CHINA', 'SHEN ZHEN@CHINA', '🐼 CHENG DU@CHINA', 'NAN JING@CHINA']
    },
    {
        id: 2014,
        tags: ['🇸🇬 SINGAPORE', '🇮🇩 INDONESIA', 'XIA MEN@CHINA', 'HANG ZHOU@CHINA', '🇫🇷 FRANCE', '🇨🇭 SWITZERLAND', '🇮🇹 ITALY']
    },
    {
        id: 2013,
        tags: ['TAI WAN@CHINA', 'SHAN DONG@CHINA']
    },
    {
        id: 2012,
        tags: ['🇺🇸 SAIPAN', 'XI AN@CHINA', 'SHEN YANG@CHINA', 'SHANG HAI@CHINA']
    }, 
    {
        id: 2011,
        tags: ['🐼 CHENG DU@CHINA', '🥥 SAN YA@CHINA']
    }

]

export default function () {
    return (
      <main>
        <h3># SEE THE WORLD 🌎</h3>
        <ul>
          {list.map((item, key) => 
            <li key={key}>
              <span className="date">{item.id}</span>
              {item.tags.map(i => <span key={i} className="travel"> / {i}</span>)}
            </li>
            )}
        </ul>
      </main>
    )
}