import type { IEntertainment } from "#shared/entities/Entertainment";

export const Entertainments: IEntertainment[] = [
  {
    img: "firstImg",
    icon: "Music2",
    name: "Новогодний плейлист",
    description: "Джаз, классика и любимые хиты для уютного вечера",
  },
  {
    img: "secondImg",
    icon: "UtensilsCrossed",
    name: "Рецепт Дня",
    description: "Имбирное печенье или горячий глинтвейн? Выбор за вами",
  },
  {
    img: "thirdImg",
    icon: "Mail",
    name: "Написать Письмо",
    description: "Отправьте теплые слова себе в будущее или близким",
  },
] as const;
