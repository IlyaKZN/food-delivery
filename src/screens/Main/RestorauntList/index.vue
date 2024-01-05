<template>
  <div class="main-screen-restoraunt-list">
    <RestorauntCard
    v-for="(cardData, index) in restorauntCardListData"
    :cardData="cardData"
    :key="index"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import RestorauntCard, { TRestorauntCard } from './RestorauntCard';

  export default defineComponent({
    name: 'MainScreenRestorauntList',
    components: {
      RestorauntCard,
    },
    setup() {
      const restorauntCardListData: Array<TRestorauntCard> = [
        {
          name: 'Ресторан 1',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 2',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 3',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 4',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 5',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 6',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 7',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        }, {
          name: 'Ресторан 8',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 9',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 10',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 11',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 12',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 13',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
        {
          name: 'Ресторан 14',
          openTime: '10:00',
          closeTime: '20:00',
          rating: 4.5,
          src: 'https://s3-alpha-sig.figma.com/img/e9eb/18c5/5094a8a293d9c224fa8b340902d4adba?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaUVFk7uHnz0OYb-2wyKREgjTXMfBAk~dTJLcIO4x4wEsHe~Jl6HGffLIVkeh~bvtxHO6LzL5pJ7uP8DMErnJcj~3OlQT7KtCCYXeeRca4t5gJJ5v8fqRCycAYtMTFQjPfvpBTnXAoYH754V5g~oAfCmFdp5rjlO-uXCJYKvnKSJ5XwIcBNOJR-JFLw30OZTP4c49r1SrnVyMvY7Fg4Sr2d32ld7aB40yDV7yfIYK0w7yRSLmz3ukctgGFNv0lmU~2pJ8BGbb16QlZb0KicqLiNy2uphTFAYfbu9JD2qxvw12FFkFDdMNeifIvG27GxoaCgpyxYB~x2WtmhTjr9I6Q__',
          promo: 'Тест',
        },
      ];

      return {
        restorauntCardListData,
      };
    },
  });
</script>

<style lang="scss">
  .main-screen-restoraunt-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 24px;

    width: 100%;
  }
</style>