const imgData = [
  {
    src: "https://images.unsplash.com/photo-1615195627275-48660e9cd84f",
    alt: "nebula cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
    alt: "mountains reflection on water",
  },
  {
    src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
    alt: "strong waves",
  },
  {
    src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
    alt: "blue wavy water",
  },
  {
    src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
    alt: "brown and black galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
    alt: "person on clif in canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
    alt: "whale tale above water surface",
  },
];

const app = document.querySelector("#app");
const modal = document.createElement("div");

function createModalContent() {
  const modalContent = document.createElement("div");
  const arrow_left = document.createElement("img");
  const arrow_right = document.createElement("img");
  arrow_left.setAttribute("src", "images/arrow-left.png");
  arrow_right.setAttribute("src", "images/arrow-right.png");
  arrow_left.setAttribute("id", "left");
  arrow_right.setAttribute("id", "right");
  modalContent.classList.add("modalContent");
  modal.appendChild(arrow_left);
  modal.appendChild(modalContent);
  modal.appendChild(arrow_right);
  modal.classList.add("modal");
  modal.classList.add("hidden");
  app.appendChild(modal);
}

createModalContent();
const modalContent = document.querySelector(".modalContent");

for (let i = 0; i < imgData.length; i++) {
  const imgWrap = document.createElement("div");
  const img = document.createElement("img");

  img.setAttribute("src", imgData[i].src);
  img.setAttribute("alt", imgData[i].alt);
  img.classList.add("img");
  imgWrap.appendChild(img);
  app.appendChild(imgWrap);
}

const allImages = document.querySelectorAll(".img");

allImages.forEach((e) => {
  e.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    const modalImg = document.createElement("img");
    modalImg.setAttribute("src", e.src);
    modalImg.setAttribute("alt", e.alt);
    modalImg.classList.add("modalImg");
    modalContent.appendChild(modalImg);
  });
});

window.onclick = function (e) {
  if (e.target == modal) {
    modal.classList.toggle("hidden");
    modalContent.innerHTML = null;
  }
};

const arrowLeft = document.querySelector("#left");
const arrowRight = document.querySelector("#right");

console.log(allImages);

let imgIndex;

arrowRight.addEventListener("click", () => {
  const modalImg = document.querySelector(".modalImg");
  for (let i = 0; i < imgData.length; i++) {
    if (modalImg.src === imgData[i].src) {
      imgIndex = i + 1;
      if (imgIndex > imgData.length - 1) {
        imgIndex = 0;
      }
    }
  }
  modalImg.setAttribute("src", imgData[imgIndex].src);
});

arrowLeft.addEventListener("click", () => {
  const modalImg = document.querySelector(".modalImg");
  for (let i = 0; i < imgData.length; i++) {
    if (modalImg.src === imgData[i].src) {
      imgIndex = i - 1;
      if (imgIndex < 0) {
        imgIndex = imgData.length - 1;
      }
    }
  }
  modalImg.setAttribute("src", imgData[imgIndex].src);
});

// arrowLeft.addEventListener("click", () => {
//   const modalImg = document.querySelector(".modalImg");
//   for (let i = 0; i < imgData.length; i++) {
//     if (imgData[i].src === modalImg.src) {
//       console.log(i);
//       if (i - 1 < 0) {
//         i = imgData.length;
//       }
//       modalImg.setAttribute("src", imgData[i - 1].src);
//     }
//   }
// });

// arrowRight.addEventListener("click", () => {
//   const modalImg = document.querySelector(".modalImg");
//   for (let i = 0; i < imgData.length; i++) {
//     if (modalImg.src === imgData[i].src) {
//       console.log(i);
//       console.log("beleka");
//       console.log(modalImg.src);
//       console.log(imgData[i + 1].src);
//       modalImg.setAttribute("src", imgData[i + 1].src);
//     }
// if (imgData[i].src === modalImg.src) {
//   if (i + 1 > imgData.length) {
//     i = 0;
//   }
//   modalImg.setAttribute("src", imgData[i+1].src);
// }
