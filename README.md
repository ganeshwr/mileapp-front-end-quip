# Frontend Developer

1. Do you prefer vuejs or reactjs? Why ?
  
  Answer: I tried both, and I prefer reactjs over vuejs because,
  - Being backed by Facebook
  - More popular based on StackOverflow survey
  - Support cross-platform with its variant (React Native for mobile)
  - JSX out-of-the-box

<hr>

2. What complex things have you done in frontend development ?

Answer: Building a 3D interface web app to design a perforated metal. Involves many 3D assets, mathematical formulas, and calculations. And many iterations over the business logic and final result with the client.

<hr>

3. why does a UI Developer need to know and understand UX? how far do you understand it?

Answer: Because the main target of a lot of company's products is to get more User Satisfaction. And UX is to make sure that the product is usable for the User to use. What's the point of eye-catchy UI if the app itself is hard to operate.  

I know some basic stuff, like minimizing as much as possible every technical term. Does it require minimal or better, no instruction to use? And retain UI consistency as much as possible.

<hr>

4. Give your analysis results regarding https://taskdev.mile.app/login from the UI / UX side!

Answer: 

Pros: 
- Responsive for mobile phone viewport
- Typography looks good

<br>

Cons:
- Image on the right side is blurry
- Phone number on the top-right corner, would be better when clicked, take the user to phone dialer with the input being predefined
- When changing language, not all the text is translated. e.g changing to Indonesia, the input label like "Organization Name" is still in English

<hr>

5. Create 2 pages :
    1. A better login page based on [https://task.mile.app/login](https://taskdev.mile.app/login)
        *if login using username : “admin” and password “mileapp” redirect to page B (view Map)
    2. A view of Map with 5 markers in different location, example :


[Image: Screen Shot 2022-01-18 at 11.14.26.png]

1. deploy on [https://www.netlify.com](https://www.netlify.com/)!
2. Solve the logic problems below !



Logic
6.a Swap the values of variables A and B

```
// terdapat 2 variabel A & B
let A = 3
let B = 5

// Tukar Nilai variabel A dan B, Syarat Tidak boleh menambah Variabel Baru
A = A + B
B = A - B
A = A - B

// Hasil yang diharapkan :
A = 5
B = 3
```
<br>
<hr>
<br>

# **From 6.b onward, I put the question in test.js**

6.b Find the missing numbers from 1 to 100

```
numbers = [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 
```


6.c return the number which is called more than 1
45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
```
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 34, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99, 100];
```


6.d 

```
array_code = ["1.", "1.1.", 1.2.", "1.3.", "1.4.", "1.1.1.", "1.1.2.", "1.1.3.", "1.2.1.", "1.2.2.", "1.3.1.", "1.3.2.", "1.3.3.", "1.3.4.", "1.4.1.", "1.4.3."]

// return :
object_code = 
        {
        "1":{
            "1":{
                "1":"1.1.1.", 
                "2":"1.1.2.", 
                "3":"1.1.3."
            }, 
            "2":{
                "1":"1.2.1.", 
                "2":"1.2.2."
            }, 
            "3":{
                "1":"1.3.1.", 
                "2":"1.3.2.", 
                "4":"1.3.4."
            }, 
            "4":{
                "1":"1.4.1.", 
                "3":"1.4.3."
            }
         }
```


Send your answer as gitlab link repository to [rifai@paket.id](mailto:rifai@paket.id) and hr@mile.app
