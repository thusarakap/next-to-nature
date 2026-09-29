export interface StayItem {
  id: string;
  stayNumber: string;
  name: string;
  subtitle: string;
  description: string;
  badge?: string;
  isFeature?: boolean;
  rating: number;
  reviewCount: number;
  capacity: string;
  airbnbId: string;
  airbnbUrl: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  amenities: string[];
  specs: {
    bedrooms: string;
    beds: string;
    bathrooms: string;
    view: string;
  };
  category: "couples" | "family" | "group";
}

export interface GalleryPhoto {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  caption: string;
  tag: string;
  category: "home" | "rooms" | "views" | "garden";
}

export interface ReviewItem {
  id: string;
  name: string;
  location?: string;
  quote: string;
  rating: number;
  date: string;
}

export const STAYS_DATA: StayItem[] = [
  {
    id: "stay-1",
    stayNumber: "Stay 01",
    name: "Next to Nature 1",
    subtitle: "Two connected rooms · Up to 4 guests",
    description:
      "A calm and comfortable two-room suite surrounded by tropical greenery. The master bedroom opens onto a private balcony with panoramic views and sunset skies, while the second room looks into the rock garden. Flexible for couples, friends, or families.",
    badge: "Guest favourite",
    rating: 4.92,
    reviewCount: 389,
    capacity: "Up to 4 guests",
    airbnbId: "22510914",
    airbnbUrl: "https://www.airbnb.com/rooms/22510914",
    category: "family",
    specs: {
      bedrooms: "2 Bedrooms",
      beds: "3 Beds (1 Queen, 2 Singles)",
      bathrooms: "1 Private Bathroom",
      view: "Valley & Rock Garden",
    },
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl4361a7S4-T6pcnzVq4MrSf6K8G0p0pnDPcsMHPyWcB3-UE6bHkMudSvnu-c9RO__EDTZ0PCwHT7EaA8tjyJ8fpBzgE8eWElndEeELqyKa3tylz03UFG8SNSIm44kYKbzRKOnzjNojryKesDCV7mEkOGC56Gqyal08gGskl8IyUvwfhnl0urpCLMfFl1L0IBT_U_lGz09hgZnNZDDpwFXDRZoPPB2kB2Azd1YYD9WflKVPaTptlLlM2gEfYuKw6E6ow",
        alt: "Next to Nature 1 - Master Bedroom with Balcony",
        caption: "Next to Nature 1 · Master Bedroom with Balcony & Hillside Views",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1L0CzHPE707qX4QIv5GD1kl19JNnm0fMWwfe1pjv8ujCQlDVvTvpNytnufTwZ9hfcXsgwh1HvoUzn_e8K2CmQY9JiJTOQtyIJJiL5JnvqSuyzesBVWsowpcq80YqpVHDA1TrJ9NiJNuDCsXH2qB7k3vglMzuoxmKTfXp30x5lneLa-tj85VYHgt-VRA-a92s8ZaovjMqWcJMNnXGKTYdcJclL2EPzY5hTcKkyCii7pZBT-tiV5b_idDlpqz2zUHdz5w",
        alt: "Next to Nature 1 - Second Bedroom with Twin Beds",
        caption: "Next to Nature 1 · Second Connected Bedroom with Rock Garden Window",
      },
    ],
    amenities: [
      "2 Bedrooms",
      "3 Beds",
      "Private Bathroom",
      "Private Entrance",
      "Panoramic Balcony",
      "Mountain & Garden Views",
      "Kitchen Access",
      "High-Speed Wi-Fi",
      "Free Parking",
      "Hot Water",
    ],
  },
  {
    id: "stay-2",
    stayNumber: "Stay 02",
    name: "Next to Nature 2",
    subtitle: "Air-conditioned private room · 2 guests",
    description:
      "A peaceful private haven complete with whisper-quiet air conditioning, ensuite bathroom, and French doors opening onto a private balcony framing the forest canopy and shifting hill shadows. An ideal sanctuary for solo creators or couples.",
    badge: "Guest favourite",
    rating: 4.95,
    reviewCount: 91,
    capacity: "2 guests",
    airbnbId: "37625745",
    airbnbUrl: "https://www.airbnb.com/rooms/37625745",
    category: "couples",
    specs: {
      bedrooms: "1 Bedroom",
      beds: "1 Plush Queen Bed",
      bathrooms: "1 Ensuite Bathroom",
      view: "Mountain Valley & Canopy",
    },
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9pQ_z3sqv1pdTxcvIsRGIQogffW0xgtof-iESH5L-m1uE0Jp8Gjk6YiTsoVEWMsGOyvHFF_wFgzcHkq-RrmFZIDVbJu9o1fPxIkavSUX78xIoWOjhOFQcKxIIpU-Z55Kh9u3ql5xUi-jLSh2_jiIk-rMmXwEOYMphGs9RRWC7_KGMAt3lqcLOOhC_myhvCZxhmPwkdR5wU1WJJI9pGBbPkUJxzOSCEmVJf2YmWN_23tdgSesVWwTOFRvk6yddb6JwzQ",
        alt: "Next to Nature 2 - Queen Bedroom",
        caption: "Next to Nature 2 · Queen Bedroom with Ambient Lighting",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqIZ4lbq4YBJQdIuIW8vnA3dPB9f3wJHycRW96HrCloOTe-bmDCbdIw2QgtOfKpG-qNjQLpeqMbud4VPlw79HvWmcKKJUFxXFf-gktWo4VIpwKxj9dwapK4404QOxhqlyvwYxcP4YKWs81VmDhRx0boYc9lH1PXvoQT7Fpa6CI9rcb5dwYg_nlZ6ClNn_P4tm3ucnc6tNhuSOApkinJwAkoBDvUNp8xGSY-OCtSJqqxuCVGtalG76oChg8iJN6Xz-EAQ",
        alt: "Next to Nature 2 - Corner Windows & Balcony",
        caption: "Next to Nature 2 · French Doors Opening to Private Mountain Balcony",
      },
    ],
    amenities: [
      "1 Queen Bed",
      "Air Conditioning",
      "Private Bathroom",
      "Private Balcony",
      "Valley Views",
      "Shared Kitchen",
      "Fast Wi-Fi",
      "Dedicated Workspace",
      "Free Parking",
    ],
  },
  {
    id: "stay-3",
    stayNumber: "Stay 03",
    name: "Next to Nature 3",
    subtitle: "Two queen beds suite · Up to 4 guests",
    description:
      "A spacious, sunlit retreat featuring two full queen beds and wide-frame panoramic windows. Positioned directly alongside the rock garden and tropical fruit trees, offering effortless access to outdoor serenity and fresh mountain breezes.",
    badge: "Guest favourite",
    rating: 4.97,
    reviewCount: 36,
    capacity: "Up to 4 guests",
    airbnbId: "37638266",
    airbnbUrl: "https://www.airbnb.com/rooms/37638266",
    category: "family",
    specs: {
      bedrooms: "1 Large Bedroom Suite",
      beds: "2 Queen Beds",
      bathrooms: "1 Ensuite Bathroom",
      view: "Rock Garden & Tree Canopy",
    },
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTCU7oTRFGIt1_R16o0A3SdY66R_YufS5O1FXTYJg3JEppcnRCV-06d08K5lc-Jn6TiSVkLwBJbt_khBbphkGd6uTKEbMiitFOFxCy8Xjy9oJfbHtyKkkIsMP1LvWVU-zVsBtVkaFKwub84a6fao1thi7J7aKAxDuVAB5ZJGe3WXZkPequbQ9zg1IwhkVf_UGZ1Y_OTjCQR-b23bWZLNOv3IodXUQlA5chJ42b7LBMo3DS9F3bgdS25guunZYCyDsrWQ",
        alt: "Next to Nature 3 - Two Queen Beds Suite",
        caption: "Next to Nature 3 · Two Queen Beds with Panoramic Nature Window",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCOqUPFPzpuVTCxU9Ee1UWuHzc0A2VIuJ8g3aJgsOhY7w4UJpNtLQ0Xjriz4ya2gp9Tn0ZSOUl0EBIyYzDKBPAKL91d2yZbKR9BE-GMAYI4HzPJ0WftOyMHSUyDng2ZqFGeEhxCRL2VmZbg6Ovoe1wOaQxtxNu3EdwfoBvO0gIo3wk_TDvdgjwOou4KZHVGlUnqbrBE3OB_Va6Akb1mFjGj2FSp1kEhihY39_X6lINAl31RljhqdhRBcwlxyo93e4aCw",
        alt: "Next to Nature 3 - Modern Private Bathroom",
        caption: "Next to Nature 3 · Contemporary Private Bathroom with Stone Tiles",
      },
    ],
    amenities: [
      "2 Queen Beds",
      "Private Bathroom",
      "Separate Entrance",
      "Balcony Access",
      "Rock Garden Views",
      "Shared Kitchen",
      "High-speed Wi-Fi",
      "Free Parking",
      "Hot Water Shower",
    ],
  },
  {
    id: "stay-condo",
    stayNumber: "Stay 04 · Feature Residence",
    name: "Next to Nature Condo",
    subtitle: "Private two-bedroom multi-level annex · 4–6 guests",
    description:
      "Designed for families, retreats, and small groups seeking utter seclusion. The ground level boasts an expansive living hall, full chef's kitchen, and dining area. A bespoke floating timber staircase leads to two peaceful bedrooms, dedicated luxury bath, and an upper panoramic balcony looking over the wild hill valley.",
    badge: "Top 10% of Homes on Airbnb",
    isFeature: true,
    rating: 4.95,
    reviewCount: 159,
    capacity: "4–6 guests",
    airbnbId: "42191078",
    airbnbUrl: "https://www.airbnb.com/rooms/42191078",
    category: "group",
    specs: {
      bedrooms: "2 Multi-Level Bedrooms",
      beds: "3 Beds (2 Queen, 1 Sofa Bed)",
      bathrooms: "1 Luxury Bathroom + Glass Shower",
      view: "Panoramic Hill Valley",
    },
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhhxU2a_pjMzxV3NqR6CAXK94FTJV51J93fPebyu_Qr9FN35yULuXOJpd9OVpOzEUhJgHjAGNZs7iZTDy6JLVocCnUHh3apV7FgGC4NGYZTWZeVCKSmAHtD1Kic7I2nI9EPLBRZ6rL3MOMk5Wak_QsRWPGV0v3KLd9Ob-se-YaDNtTtHExV-SRXt9RuSzdEVHbQHXZ2ljLNFfpmi_TtTRznNS5wrOQv0w9-6ubhD-Ltd9meLx_B9EmqciBgV1ThTzqEA",
        alt: "Next to Nature Condo open-plan lounge and floating staircase",
        caption: "Next to Nature Condo · Open Living Hall, Floating Stairs & Kitchen",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLOi_ufmW_9p-7kdKjwRqsZNzALuYuwnoYuBuCBOlmXQ0icf6oKzoFK6ysX55MZdqNgkZEmOQXL3SwPMJ5HWN6axRDpCtvL3XR3IAdPXjv0riBkYJaE6s864rTTwiGJ8xUA8T1w5lC0qZ7A_Pr-yHVt-3a_GCn-3C52WSkYkLp78dSkRLYP04DQovYfBYaSNKrZ7YY-UPidYDXd5bmTIbH5cnhGY5AQZlb__9udE8BmGk5_fSqq5sU37O6XvcK8D4BAA",
        alt: "Condo dining area opening onto private balcony",
        caption: "Next to Nature Condo · Dining & Walkout Balcony",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmY9bIU2mZSB2WFXZphn0YwhHbCNfFjj69P_OG4hw44QBDkCRfWFQVJN_BeR1CRXghaNNMonaRamo7JLmYLQh2IbnFqRiTNVW_nLD9kPo6IxoVwxviCctQUaKuyk6spnvUg8ApbRSn9PbPxAaUMUBvuPjhDiw7gqG79ExlK9dbAoxLvegfy01zu0_dk5mB7YJr5K7cTNujORB15OpMQtOHnZcQrlhnzugrqo4UhREvu7qPVGUshu8gqtvG7enxz3xTOg",
        alt: "Condo luxury modern bathroom with glass shower stall",
        caption: "Next to Nature Condo · Modern Bathroom with Frameless Glass Shower",
      },
    ],
    amenities: [
      "2 Multi-Level Bedrooms",
      "3 Beds (Up to 6 Guests)",
      "Full Private Kitchen",
      "Expansive Living Room",
      "Upper Panoramic Balcony",
      "50\" HDTV",
      "Dedicated Workspace",
      "Private Entrance",
      "Free On-Site Parking",
      "High-Speed Wi-Fi",
    ],
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC00zEUpfMa8o3_Je2edhatBPgcPBVMNFq1q7Ul5bsPLfKYuj4tCRejL-2wSZpOpAma4vkV-J88EL2LUqz6UctAnwxnxg8DE9Xh_1tfl12eo1UNNo5U6IT8s_tf3uvVdoCQ2IoL7NTppwgnVN_-hG9vKGNYTLpxL3ZY4_Tt6Id187C9bNvWibadZTU7QbmkW8cRDMtIRRtrkJTvNzw4MtA_WrnYkc5aQv1gmWEzc5Af_B9FSB4tjO2HczO7YtV06IQOiw",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtwh9PUNoBffBmiFQXcrBH1pyVxIN6zuSZ2KU8RyXGrmtCSkZHyWZMwuLDs0bDfj7uFt_XyKhKR5L8Kzgg5nGzvl7yegl-eO8ybbrf97mhpsCSLH6-vg5KDiTEzK1iWz4SWq-Mc-Aa5TxHzqZU31T4i6nQRUMJ6KV0E4EccAcAIKEHcm3Ssy3cFd6Y7SyEGHvFISN6l9JIQCh34kAGyuu325HH6V7aUi-9MtWQiMmCQpvP354W2VjYbkp_S9mCZjj6Rg",
    alt: "Architectural exterior of Next to Nature with balconies and garden terrace",
    caption: "Next to Nature Homestay · Architectural Facade & Terraced Hillside Grounds",
    tag: "Architectural Facade",
    category: "home",
  },
  {
    id: "g-2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBnA3G_jfn2aD0rSEN5VJvaiRjv97kwtlKcDeYtvFyfgFyijObeooZP6o6xQIHW6GEoUwMGj8sKx1G4A56bpUNGxmSFZkq-0SrGavxwuIDL6I9jsoOnHPD6ZSO19TyO_HMJN4tMcUhMBL4l_mumIpG_UrfQJT1HSjGIYbr9hOc9WKd1yk3FZopGYaN1Ku--OhaJ085Td243C6HMqaFkpluriri7pxYOSmOeasyy3oizzSVQM7B5ZfcVPbQ2PNtDs1PEA",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBao6OhlM06Q_QMiusOXTidrCigz9mtUo-JYYcUB5LLYidtrc50dJ-JrSIQuytc5OTb4WFmprMvQo6iFXHHyaoAVoN6ZCEUzmJ31krhk7JwVALusLwP_eHdve8i8eP-YrhDT3tDgQXchj0C5zf_FS2BNtlxl3E8O0ZsYtyzIyKuSKWb7yTieMwLDy9SYVUO0Rz0niEKmYEBTn7jhLYDnpI9yD94Zylrqqzi51-NxRff5Mp0dGT_jvY5vzSBYRqOR_bQyQ",
    alt: "Verandah looking over lush green hills and trees",
    caption: "The Valley Verandah · Open Terrace Framing the Mountain Canopy",
    tag: "Valley Verandah",
    category: "views",
  },
  {
    id: "g-3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPWC6VX3jyW-vrDoleY4jtka0vnQa35-lMAfj90FeLKNK4K43HGKrA0-8v3YsrkzYLubbak5ooi02Mw3rkpSG_WNugY_jTFagnDKqA0yZexNKZex6IR30mMCKuLvibfuwi8OA8V_lwVhqBLGowHA5q_yx_qZ-Hf5BpWYI-gLPIbFCAtrPj3e8nhjEECz22Ij0um1HpGuKURWh4gbCWqCj87rIVZrdlCL9rCwlpdTY0LUGKt9ZqyIglxjtYIHhzLHQDwg",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNzDtm007Bnmm-P5DbdVRzCko51Ik16V4frriK-aiQKb_2vymGrsW-3S6_296y0fHGpivmHfTCqspzmo9f76xya_MF_zL4dsHtDeSs_Y-n3bqxrVNz5HocMOufLQCcThbf0h1dDOrS-arzdoxW2BdKB_GSktUmVQ8VKCPbBYN0duDumew4CflJs7tk8YtFY8sezKpequeBEGTjMaQ3VgvPSSKD61T8ILlD4qLDKdyxD-sP7RauezfwKrYghHD2xIlMow",
    alt: "Open concept living and dining with wooden stairs",
    caption: "Next to Nature Condo · Open Living Hall, Bespoke Stairs & Dining",
    tag: "Condo Living Room",
    category: "rooms",
  },
  {
    id: "g-4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP2h0aTm9UYfXN_voSlBx5DHPIds8IpbTLFG12KjaR20uYMmf-1p6g3Onm0e7VTpGeSE7pMsliPwH3p1ggPCrDjIWhVmkVX8jaPYUHCmKNKfNQlde1BUjfsuk5nxJU_cPiwKXyvfZ6f3fs56I2jdpuMNR-WRaFIVgLApN0v776jiY-i8hVjuhYn5NE4DcMLA5JMipYU8py0qJwzXPPPBK1vDucwVeMsd8f2__SJz458BWuEfjeuIVyce7XJdaf5bEWRg",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtPynWcjgzNs0fADLxUL9aSX1fslsW39smEQUvyyA9rcsPZoij7f5nTWyo63eTingmonPkjHxdw8UO3LYoj1RCy0MwJLPKx3Qx3BLYIbqKNy6blhKoNvwBQ6B7qQ89fXHkQtZHlCDG_K0sO2-gQKb5RtEwDpQzQ3MtQvZyeFlWr02tEHHFwXOYenuPY8LrLFZeXDlhNuTPAQSz8ipEMHkHSiRYwco8mly7y5wSEfxrt5XOrBfoMFTzu6BcsR0MxVouLw",
    alt: "Pink sunset through tropical trees",
    caption: "Twilight Valley Horizon · Soft Mountain Dusk Viewed from the Verandah",
    tag: "Sunset Horizon",
    category: "views",
  },
  {
    id: "g-5",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh8tYhyRRPFAIIuF4PBhp4LQUuCsjEFQe3jA2KmW-FyYDuoZ1xS5JpdKzAoyYLrNMmzyx3gXV57Qpd0Nbr-5mZ5bLPEMf8YGAUwyWLzjocL8HmoY6ACh1D4arf6NT1PVpHhPTmQho7jSMZFJuZRxn-fGs0W6eYk4GU25T8vtyV5cphatO1hIi0X9Q00XnWAFf9IFlJ8IbRBIeCdkqE7c2KEaU_AWkOs3Hhtzq8BdCNGbhhwnR6-aB1f0sVjvMJnqtouQ",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIToPbC2nFgmcqJAwZDcgEEoP_14kEC2PBFZHoY5Jrjj2uD_V6Dbum77g0-RdxnUTkK4pT2p4la5RmTXiemn2ZYkstXAbEviBrU79L10qT0IDsifrHt0XG98x7F3qSE-x2JK9eBkzziTqOo0l_X9UDdKPs0_7ttSTiapj9VjqQxVsLIKYA8MCtXFoSRnBD3okVWp0CLiRSP5Swg5GvlKqRsiSedWV-KvuN26tE2clqqBwGTn1KbUMqMECMLmX-nbDhXg",
    alt: "Master bedroom with sliding balcony door",
    caption: "Next to Nature 1 · Master Suite with Direct Private Balcony Access",
    tag: "Master Suite",
    category: "rooms",
  },
  {
    id: "g-6",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhCAwBGzet0CQ-jKBo8tgYJetKT-Cj4CGwX4uXw-EADxZ7EmZvlPbsKI_HToSHrGRbXkoDYyb4ZsUTOXqVwt6lu25b1lPuzYxjcjR8ApJYNcyJosfZPUw4L30bcs_n_cMOjNJn_7w2rQl1YcUJlhuVsu_38lrbm9X-EvCtVmfy4PRwgAcdMNjSNs866fOWViPd6ko2UUSNOxAYq8vsZx4zlet5qyTsNPW8kAR8U88tU6makS8IfhjjO_8sjuMDdgNLIA",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQL-Se3HO3vlTWHFGv3igs5-p5blnoNYwoYFarmMZjIqd2iBNSLUIU5pGFxMoc4ys6HZKInyNx6wFrp3964Wpf0bADM0VsjCG0H4K6-WYgd6GxOVX46xOCo0iGa-76Yq8cXQSOPUTuNzKalwMwd1HJk0Cd-zKG82AQ77cK6ETqM3tGlJ7EGWARRqq-nQgMKBqLZGt2VXgK7F5S-_yu2EnPMJoic0aGBe2Ql-qHaNuV399L4sNTVy1rU9v7KCBKvQACGw",
    alt: "Garden path bordered by climbing plants and elephant ears",
    caption: "The Tropical Garden Walkway · Climbing Vines & Giant Elephant Ears",
    tag: "Garden Pathway",
    category: "garden",
  },
  {
    id: "g-7",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1xbpOYYk1neBVCvArtaMi83ssdjqBVt5WJf6FtH9B0IP9lJnlGSq1wNTmE7VSyAV1BtTVL03IEs95pJnDBG66rtdoUIJbq_CpmtHG4j2TfEgAwds1HR3h5L0NHUaibGWd7k3rPthn-qjDfhYLiB19KExg0IxGqzEexhfoGmaIVbnIRTpNMe2mocBSvr3JrQ4c69_NEMjLCrJ9ciw_XP7gPByc5RuswB4FDRIpO02bWtgGRpuIHY59lYR_AtpBbtcEvg",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVB-9LT-q3udGNMrPBtWgrgCTfDA3wqBPvA2fF-JpVOGy6Uq4gvxE7hUqHP0fmpe2P6pZjsSstb5amqXQKI2uejlLGxlucwT5aCc0M8ta-qpHxF1MNR2q_Nm_3cyIJe-T6dGPlWs3VRUkdIRYm6t7JPxpvN1P0Us5jSkTPXrfdRSXmQsKRu_u7xMgdCk7INcwC4c4uKZkDlPXslzjZbvjLtoXedScwx87wIFaShvOik-7oj7-Vtg7slWHLI0chsP1Kyw",
    alt: "Concrete table with white umbrella looking over greenery",
    caption: "Terrace Dining · Minimalist Stone Table & Umbrella with Mountain Panorama",
    tag: "Terrace Dining",
    category: "home",
  },
  {
    id: "g-8",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAv4nQTZ6f4wW7-M23YQ0CNsrnGU0_L3mDEgGyHej4_KuT2mo68kq61DXYWz_p1AmdH8htv_zXQfR0XGSwQGuV2qaPTccsWHynTOxAQygsP0tR21SFjoDhA-ViRzi1Z1iOgf2vtQ5bMbvKXHM90p1kyrVbyKvfp_ZRm2bpKAmAaHwcFBU9c7Q6xbNnl9B7a2i7DgsDNN_39FSZ-6tIqHaZCr19Ivmuycr850yxoq-zAPuJePBO8Im23WCUMk_AaBnulQ",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDvl7mnweTJH3o-t91uj1uxXIg75Aymslt5OBBIku83ehGW-pbXqK3LWzRGtx_TcVsely51ALf1Fa9Zo3w9OrmN_p2FDeDwFS2XIv7bEe1gLJmEMB_80M8P_Uksb26XQy2HPEgAJjvccs5rJWHprbBYtvMA1xAlMcLEMdm71ntVZJ2lon9lmutqPpCWyZzwPZrrMb3Tlu1APdHpd8irM-hSqiKnujhv9tdTa7lgfUiQeX8ha4Hf7gINCBGM34X-6uFZQ",
    alt: "Vintage railway station clock and Buddha statue along verandah",
    caption: "Verandah Heritage · Vintage Railway Clock, Buddha Statue & Exposed Timber",
    tag: "Verandah Walkway",
    category: "home",
  },
  {
    id: "g-9",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHkZ1gtnaZ2bfklvudszSm5HwsQ0BxvV_evz824JBU8d0U2ENb7YiDVx6D8g8vCbkPbCN7pOXS7WbvNjdg0Nl0ZdQTkoRiCWeB_f_kCfxwESDqh5iijunOsa8pSFBj8QwRdu_QDMOuRqcK0OOBxnbJj88l-UM_b6xQRGXlOk0OXNO94dvHu0ZZDTxKV3qcfVe6cJxPNIY_iAY7z-DTnrs9FI6Khbdrx6hhY7ahTzkZmyxkA0Aj96nXiBmRPGGU7oDSGQ",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwha6sMhZJjQGyE_mCbU4W4_VOJlztZJy-bsRkX4ivuX3xoT2qztOaVVTB-KBV7di6sIBl74BNf5TI-xdJQJYOE9JjH_EYk8JauHH8yFBOoRnSQfiuWIahWziUKmtoO4uG7PDozWlC6g2noiIi09GT65vJU24U_QVIAD-TEXdL_Z2SnFLvTvSETU6q3lW0IktrsotghO3NrZAkpAcsx3jOA9Pni0sTXUvGDKCHGDfvPPTXn-id5eDe4UkdRKxpoKoHAg",
    alt: "Spacious room with two queen beds facing tree window",
    caption: "Next to Nature 3 · Two Queen Beds with Picture Window Facing Canopy",
    tag: "Two Queen Suite",
    category: "rooms",
  },
  {
    id: "g-10",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNH6GcbC0PDtcCi0Jmr6eXdcnCBkLUMXIh-WjWW1CY2E_slzNxbPK2sW1Jq9KeCeHOtW9pFAmOYnXz8NrgzqK-UC6AnnujfacNTDRO6MUj5q_yPGcomrVYxfXbo_VoLAVm-UCsFtCE_i7uBm5hmiSUPbqYPWAbIPkQ7USQWZR4lrdcfxiLReX7hVXcibrlCtxNIhwNDYsUc38zbrVQ2_JWuiAwXYaDO8VD87cr8qRMGeFOZZXURDp1_mFAMzegNvrRGw",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAkc-4kqV_mt7U5d6rw1PDKbuHctjz_1nWJq2EkWBbWchDXbKluWMASCz2BgDDhXLnRDaVGOOen1qnWcMG1bij5wP_Gm1_mURbvxWsyTkdmuB-XPo1-M3A7LC2e4UAlBV1yDnE0BBb17A6V1Ll7XhdIpjluxzrG30_9CSaF74qP0jjPPbLjzj9sX2k1XE9cP-Mr57Nba8AGU8ho5NqBT8OrzjsDb__URKai6gJ4S1SxEnkH-F1-UgDSTIvdKd4s0zCZQ",
    alt: "Modern tiled bathroom with glass shower stall",
    caption: "Condo Bathroom · Ceramic Tiling with Frameless Glass Shower Enclosure",
    tag: "Condo Bathroom",
    category: "rooms",
  },
  {
    id: "g-11",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnR1BKq_u6Fp4OSguZtqNdjJPmK9EP_D7-o32hJ3MnztGUv0cK-u1Mbo89iCczOX8lrbEzncwSs4J6rmDoUctJ-H6a_Lg2Wr6YIFSEFVRulkdBB6awLXFXHkpzD22gdDpkyJKwBoqkfkHEGbOBUgzSxpRKP-fw4Ir1k48tiGL9YsUrEAYpeIE3lojCrVJZO51PO8mlbzC7BPGtrauZVv615u94AU6IrsO46pL7dXSOtTYtCwTndX3Q7nLQWakdDb8MhQ",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc2hjHWQJgEL9MXRlRshCcRBa2hc5SnoiqMaLNuzR35iM9G-ShB84w3h0hDrfUMPAtCa3GGM0XsJetr38MCj2iHUDvTWtTTURGA4xNPB_w1AhoK8BIDMwYGy5BT_MKUoStAG_o0BOUGxTFpGm8cE1ZN9bePtj0OhmCFw-00XAiunVsBD9_5RF-u-8sT56Mnu1H9Y_d0738PuYHhiKPwP_OU4b4UpbDTkWRVVPgfaO5FPrUMwUS7t4xxJwxqFQiJ7Ms3Q",
    alt: "Clean modern washroom with sink and mirror",
    caption: "Ensuite Bathroom · Spotless Private Vanity & Quality Fixtures",
    tag: "Private Ensuite",
    category: "rooms",
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r-1",
    name: "Anupam",
    quote:
      "We had a great stay in Kandy. The place was clean, spacious, private, and located in a quiet area. The host was very friendly, welcoming, and helpful.",
    rating: 5,
    date: "Verified Airbnb Guest",
  },
  {
    id: "r-2",
    name: "Toby",
    quote:
      "Chamari and Nilan were the most amazing hosts. It is a beautiful, peaceful location a short drive from the city centre. We were welcomed like lifelong friends.",
    rating: 5,
    date: "Verified Airbnb Guest · Superhost Review",
  },
  {
    id: "r-3",
    name: "Manjula",
    quote:
      "The property is beautiful, spotlessly clean, and very well maintained. The surrounding area is peaceful and offers stunning views over the forest canopy.",
    rating: 5,
    date: "Verified Airbnb Guest",
  },
  {
    id: "r-4",
    name: "Krishna",
    quote:
      "The real highlight? The breathtaking views from the property. Waking up to the green hills and morning mist was absolute peace. Truly recommend!",
    rating: 5,
    date: "Verified Airbnb Guest",
  },
  {
    id: "r-5",
    name: "Navin",
    quote:
      "Great stay with decent amenities and very friendly hosts. Close to Nature and very scenic, quiet area with delicious fresh morning tea.",
    rating: 5,
    date: "Verified Airbnb Guest",
  },
  {
    id: "r-6",
    name: "Nicole",
    quote:
      "We had a short but lovely stay. Chamari and Nilan were very helpful at every step, from directions to local transport and authentic breakfast.",
    rating: 5,
    date: "Verified Airbnb Guest",
  },
];

export const FAQS = [
  {
    question: "How do I make a reservation?",
    answer:
      "All bookings are completed directly on Airbnb for secure payments and verified guest protections. You can click 'View on Airbnb' on any room card to check live calendar availability and book your dates instantly.",
  },
  {
    question: "Can we book the entire homestay for a large family or group?",
    answer:
      "Yes! By combining the Next to Nature Condo (annex for 4–6) with Next to Nature 1 (suite for up to 4), the homestay comfortably accommodates up to 10 guests across discrete, private self-contained wings under one roof.",
  },
  {
    question: "Is breakfast available?",
    answer:
      "Yes! Delicious traditional Sri Lankan breakfast (fresh tropical fruit, hoppers/roti/curries, and freshly brewed Ceylon tea) is prepared upon advance request by Chamari.",
  },
  {
    question: "How far is the property from Kandy city center and the train station?",
    answer:
      "The homestay is located in a peaceful hillside neighborhood approximately 4.5 km (~12-15 minutes by Tuk-Tuk or taxi) from Kandy Lake, City Centre, and Kandy Railway Station. Nilan can also help arrange trusted local transport at fair local rates.",
  },
  {
    question: "Is there free Wi-Fi and parking on-site?",
    answer:
      "Yes, high-speed Wi-Fi is provided throughout all rooms and verandahs. There is dedicated private parking on the premises for scooters, cars, and vans.",
  },
  {
    question: "What is the check-in and check-out schedule?",
    answer:
      "Standard check-in is from 2:00 PM onwards, and check-out is by 11:00 AM. Flexible check-in or luggage drop-off can usually be accommodated with prior coordination with Chamari & Nilan.",
  },
];
