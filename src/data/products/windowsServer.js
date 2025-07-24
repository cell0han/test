export const windowsServer = {
  id: 6,
  name: 'Windows Server',
  category: 'Сервер',
  price: '₮250,000-с',
  originalPrice: '',
  rating: 4.9,
  reviews: 980,
  image_description: 'Windows Server үйлдлийн системийн лого болон сервер дата төвийн зураг',
  image_src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/47d4c7dc-84b3-4814-b1cd-aa1b50b7eaca/0cd884fba2a4b79f924f192b044b6767.jpg',
  description: 'Байгууллагын дотоод сүлжээ, хэрэглэгчийн эрхийн удирдлага, өгөгдөл хадгалах, програм хангамж хостлох зэрэг олон мэргэжлийн чиглэлд хэрэглэгддэг систем.',
  longDescription: `**Windows Server** бол **Microsoft**-ийн боловсруулсан **серверийн үйлдлийн систем** бөгөөд байгууллагын дотоод сүлжээ, хэрэглэгчийн эрхийн удирдлага, өгөгдөл хадгалах, програм хангамж хостлох зэрэг олон **мэргэжлийн чиглэлд хэрэглэгддэг систем** юм.

---

### 🖥 Windows Server гэж юу вэ?
> Windows Server нь **бизнес, байгууллага, дата төвүүдэд** зориулсан **серверийн зориулалттай** Windows-ийн хувилбар юм.

#### 🔧 Үндсэн үүргүүд:
- **Active Directory (AD)** – Хэрэглэгч, эрхийн удирдлага
- **DNS, DHCP сервер** – IP болон нэр хаягийн хуваарилалт
- **Hyper-V** – Виртуал машин (VM) үүсгэх
- **File Server** – Файл хуваалцах, хадгалах
- **Remote Desktop Services** – Алсын удирдлага
- **Web Server (IIS)** – Вэб програм хостлох

---

### 📊 Windows Server-ийн он онуудаар гарсан хувилбарууд ба ялгаа

| Хувилбар | Гарсан он | Онцлог |
|---|---|---|
| **Windows Server 2008 / R2** | 2008 / 2009 | Hyper-V нэвтэрсэн, AD сайжруулалт |
| **Windows Server 2012 / R2** | 2012 / 2013 | Cloud integration, Storage Spaces |
| **Windows Server 2016** | 2016 | Nano Server, контейнер, Shielded VM |
| **Windows Server 2019** | 2018 | Hybrid cloud (Azure integration), Cluster Sets |
| **Windows Server 2022** | 2021 | Secured-core сервер, SMB over QUIC, TLS 1.3 |
| **Windows Server 2025 (preview)** | 2024–2025 | AI дэмжлэг, Windows 11 суурьтай шинэчлэл |

---

### 🧩 Windows Server Core гэж юу вэ?
**Server Core** бол **Windows Server-ийн хөнгөн, GUI буюу график интерфейсгүй хувилбар** юм. Энэ нь **зөвхөн командын мөр (CLI)** ашиглан тохируулагддаг.

#### ✅ Давуу талууд:
- Илүү **аюулгүй** (GUI байхгүй тул халдлагын боломж бага)
- **Бага нөөц зарцуулдаг** (RAM, CPU)
- Серверийн **гүйцэтгэл илүү өндөр**
- **Patch/Update багатай** — GUI багатай тул илүү тогтвортой

#### ❗ Сул тал:
- Зөвхөн **мэргэжлийн админ** тохируулах боломжтой (CLI мэдлэг шаардана)

---

### 💡 GUI Full vs Server Core ялгаа

| Үзүүлэлт | Full Server (GUI) | Server Core |
|---|---|---|
| Интерфейс | Windows GUI | Зөвхөн CLI (cmd/PowerShell) |
| Нөөц ашиглалт | Өндөр | Бага |
| Суралцахад | Хялбар | Хүндэвтэр |
| Хэрэглэх | Жирийн админ | Мэргэжлийн админ |
| Шинэчлэлт, хамгаалалт | Илүү их шаарддаг | Бага |

---

### ✅ Дүгнэлт
- **Windows Server** нь байгууллагын төвлөрсөн удирдлагад ашиглагддаг хүчирхэг систем.
- **Он оноор** шинэчлэгдэж, **аюулгүй байдал, cloud интеграц, виртуалчлал** зэрэг боломжууд сайжирч ирсэн.
- **Server Core** нь илүү мэргэжлийн, нөөц хэмнэлттэй, өндөр аюулгүй байдлыг хангадаг хувилбар юм.

**Windows Server** үйлдлийн системд "2 core", "6 core", "8 core" гэх мэт ойлголт нь **серверийн CPU-ийн цөмийн тоо (core)** болон **Microsoft-ын лицензийн тооцоололтой шууд холбоотой**. Энэ нь зөвхөн техник талаас гадна **лицензийн бодлого**, **гүйцэтгэлийн хүчин чадал** зэрэг хоёр үндсэн талыг хамарна.

---

### 🧠 1. Техникийн утгаараа: CPU Core гэж юу вэ?
Windows Server-ийг ажиллуулах төхөөрөмж нь **нэг буюу хэд хэдэн CPU**-тэй байж болно. Тэр CPU бүр нь **нэг эсвэл олон "цөм" (core)** агуулдаг. Core бүр бол **нэгэн зэрэг даалгавар гүйцэтгэх чадвартай бие даасан нэгж** юм.

| Цөмийн тоо | Ашиг тус |
|---|---|
| **2 core** | Жижиг серверүүдэд хангалттай, ерөнхий хэрэглээ |
| **6 core** | Дунд зэргийн ачаалалтай сервер – вэб, файл, DNS |
| **8+ core** | Их хэмжээний өгөгдөл боловсруулах, олон хэрэглэгчтэй орчин |

#### 💡 Жишээ:
- AD + File сервер → 4–6 core хангалттай
- SQL сервер, Hyper-V → 8–16 core шаардлагатай
- Cloud VM, AI систем → 16–32+ core ашиглана

---

### 💳 2. Лицензийн талаасаа: Windows Server Core лиценз гэж юу вэ?
**Microsoft-ын лицензийн бодлого** 2016 оноос хойш **"core-based licensing"** систем рүү шилжсэн. Энэ нь:
- **Windows Server-ийн лицензийг CPU-ийн цөмөөр (core) тооцдог** болсон
- **Хамгийн багадаа 8 core/CPU + нийт 16 core/server лиценз шаарддаг**

---

### ✅ Лиценз тооцох үндсэн зарчим:

| Тохиргоо | Хамгийн бага шаардлага |
|---|---|
| 1 CPU = 4 core | 8 core лиценз |
| 2 CPU = 6 core тус бүр | 12 + 12 = 24 core лиценз |
| 1 сервер = 8 core | **16 core лиценз заавал авах** |

#### 📝 Боломжит лицензүүд:
- **2-core pack** – хамгийн бага нэгж
- **16-core license pack** – server-н үндсэн лиценз
- **CAL (Client Access License)** – хэрэглэгч тус бүрээр тусдаа

---

### 📊 Гүйцэтгэлийн хувьд ялгаа (2 vs 6 vs 8 core)

| Core | Гүйцэтгэл | Тохиромжтой хэрэглээ |
|---|---|---|
| **2 core** | Суурь түвшний үйлдлүүд | DNS, AD, хөнгөн VM |
| **4–6 core** | Дунд зэрэг ачаалал | Вэб сервер, файл сервер |
| **8–12 core** | Илүү олон хэрэглэгч | SQL, Hyper-V, Terminal сервер |
| **16+ core** | Enterprise түвшний хэрэглээ | Azure, HPC, кластер, Docker |
| **2 Core (CPU)** | Төхөөрөмжийн 2 цөмтэй байдлыг илэрхийлнэ |
| **2-Core License** | Лиценз худалдан авах нэгж (Windows Server-ийн хэрэглээнд) |
| **Цөмийн тоо их байх тусам** | Гүйцэтгэл сайжирна, лицензийн өртөг өснө |
`,
  features: ['Active Directory', 'Hyper-V', 'File Server', 'Web Server (IIS)', 'Core-based Licensing'],
  badge: 'Сервер',
  licenseType: 'Core-based',
  systemRequirements: '1.4 GHz 64-bit processor, 512 MB (2 GB for Server with Desktop Experience installation option) RAM, 32 GB disk space, Gigabit (10/100/1000baseT) Ethernet adapter.',
  gallery: [],
  versions: [
    {
      id: 'ws-std-2022',
      name: 'Windows Server Standart 2022 Volume',
      price: '₮250,000',
      description: 'Байгууллагын стандарт хэрэгцээнд зориулсан Volume лиценз.'
    },
    {
      id: 'ws-dc-2022',
      name: 'Windows Server Data Center 2022 Volume',
      price: '₮250,000',
      description: 'Дата төв болон өндөр ачаалалтай орчинд зориулсан Volume лиценз.'
    },
    {
      id: 'ws-dc-2025',
      name: 'Windows Server 2025 Datacenter - 8 Core License Pack',
      price: '₮9,000,000',
      description: '1 жилийн Commercial Software Subscription бүхий 8-core лиценз.'
    }
  ]
};