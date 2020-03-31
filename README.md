# Mineswepeer 

Apribojimai:
- bent vienas langelis be bombos;
- mažiausiai bombų: 1;
- daugiausiai bombų: (MxN)-1;

Lentos dydis:

- mažiausias: 2x1;
- didžiausias: MxN;

Žaidimo logika:
- laikrodžio pradinė reikšmė: 0s;
- max laikrodžio reikšmė: 999s;
- Paspaudus ant langelio:
    - atidaromas langelis;
    - patikriname ar nėra bombos:
        - jei yra: GAME OVER;
        - jei nėra: skaičiuojame kiek aplinkui yra bombų
            - į atidarytą langelį įrašome suskaičiuotą kiekį
            - jeigu bombų nėra  (kiekis 0), tai atidarinėjame aplinkiniuis langelius.