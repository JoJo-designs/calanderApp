# calanderApp

Goal: The goal of this project is to create a clander app that can keep track of hours between 9-5. people can add events and the infomation will be held in local storage. The app will use jQuery.

Some starter files were provided.
index.html and style.css

Live Verison: https://jojo-designs.github.io/calanderApp/
Repo link: https://github.com/JoJo-designs/calanderApp

So far I have added the date to the page and I have put two hours with text areas and two save buttons. The value from the text area is saved in local storage and written onto the text area when the page is refreshed. I added the rest of the text areas and made it so they will change colour based on the time of day. The colour changes repersent the hours that are past in the future and present. When I got everthing working I did some css and used some bootstrap columns to make it reponsive.


Afterwards
I had a fair bit a trouble with this assignment. My frist issue came from having to do it in jQuery. I didn't feel like I really understood jQuery. I felt the couple lesson we did on jQuery were not substanial for my understanding so I choose to start with Javascript and turn it into jQuery after I had it working and understood it a little better.

 My next issue was when trying save the data to local storage. I started by using an array inside an odject. I was thinking that I could always store the same hour at the same index and have a loop that would select the value and put it into the right text area. I reached out for some help at this point and I was shown somthing that would be alot easier. My next issue was changeing the colours of the boxes based on the hours of the day. I started by making a function to cheage to colours and gave it the current hour. I added a Data-set to the html for each hour and I was going to compare the the time to the hours in the dataset. I was going to loop this fuction for each but I couldn't get it to work just rigth. I had it console.log the hours and if the they were current future or past. For the most part it worked but 9:00 was always in the future and 1:00 was always current but the other did seem to read corrctly. I got some help and added a paresInt which soloved the issue. 

 Lastly I added some Bootstrap columns so it would be reponsive at samller screen sizes.

Screen shots 
![Calander App](/image/img1.png?raw=true "Image of the clander app")
