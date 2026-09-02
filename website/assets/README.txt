DESTINATION PHOTOS
==================

These four photos are live across the whole website:

  kodaikanal.jpg   Poombarai village and terraces
  munnar.jpg       Tea estates at sunset
  thekkady.jpg     Periyar lake boats in the mist
  vagamon.jpg      Hillside resort and tea slopes

Your original files are still safe in the "Images" folder one level up.
These copies are resized to 1200px wide and compressed to load fast.


TO CHANGE A PHOTO
-----------------

Save the new photo over the matching file here, keeping the SAME
filename. For example, replace munnar.jpg with your new Munnar photo.
Nothing else needs editing - it updates everywhere on the site.


IF A PHOTO LOOKS BADLY CROPPED
------------------------------

Cards are wide, so tall photos get trimmed top and bottom. Open
data.js and find the "focus" setting for that destination:

  focus:"center 36%"

Lower number  = keep more sky
Higher number = keep more foreground

Current: Kodaikanal 56%  Munnar 36%  Thekkady 54%  Vagamon 48%


HOMEPAGE BANNER
---------------

  hero.jpg   the big photo at the top of the home page

To change it, save your new photo over hero.jpg, keeping that name.
Use a wide landscape photo, 1920 pixels across or more.

If the crop cuts off the part you want, open style.css and change
this line near the top:

  --hero-focus:center 55%;

Lower number  = show more sky
Higher number = show more foreground


ONE PHOTO FOR ONE PACKAGE
-------------------------

Upload the photo here, then open that package in the admin panel and
put the path in the "Card Image URL" box, for example:

  assets/honeymoon-room.jpg


THE .SVG FILES
--------------

kodaikanal.svg, munnar.svg, thekkady.svg and vagamon.svg are the
drawings the site used before your photos arrived. They stay as a
backup - if a photo ever goes missing, the drawing shows instead of
a blank card. Safe to leave alone.
