document.getElementById('continue1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

   
    if (back.classList.contains('hidden')) {
        back.classList.remove('hidden');
        back.classList.add('block');
    } 

    if (c2.classList.contains('hidden')) {
        c2.classList.remove('hidden');
        c2.classList.add('block');
    } else {
        c2.classList.remove('block');
        c2.classList.add('hidden');
    }
    if (continue2.classList.contains('hidden')) {
        continue2.classList.remove('hidden');
        continue2.classList.add('block');
    } else {
        continue2.classList.remove('block');
        continue2.classList.add('hidden');
    }
    if (continue1.classList.contains('hidden')) {
        continue1.classList.remove('hidden');
        continue1.classList.add('block');
    } else {
        continue1.classList.remove('block');
        continue1.classList.add('hidden');
    }
    if (back2.classList.contains('hidden')) {
        back2.classList.remove('hidden');
        back2.classList.add('block');
    }
    if (back.classList.contains('block')) {
        back.classList.remove('block');
        back.classList.add('hidden');
    }
});

document.getElementById('continue2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    
   
    if (finish.classList.contains('hidden')) {
        finish.classList.remove('hidden');
        finish.classList.add('block');
    } else {
        finish.classList.remove('block');
        finish.classList.add('hidden');
    }
    if (continue2.classList.contains('hidden')) {
        continue2.classList.remove('hidden');
        continue2.classList.add('block');
    } else {
        continue2.classList.remove('block');
        continue2.classList.add('hidden');
    }    
    if (c3.classList.contains('hidden')) {
        c3.classList.remove('hidden');
        c3.classList.add('block');
    }
    if (back2.classList.contains('block')) {
        back2.classList.remove('block');
        back2.classList.add('hidden');
    }
    if (back.classList.contains('hidden')) {
        back.classList.remove('hidden');
        back.classList.add('block');
    }
   
    
   
 
       
    
    
    
});

document.getElementById('back').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

   
    if (finish.classList.contains('hidden')) {
        finish.classList.remove('hidden');
        finish.classList.add('block');
    } else {
        finish.classList.remove('block');
        finish.classList.add('hidden');
    }
    if (continue2.classList.contains('hidden')) {
        continue2.classList.remove('hidden');
        continue2.classList.add('block');
    } else {
        continue2.classList.remove('block');
        continue2.classList.add('hidden');
    }
   
   
    
    if (c3.classList.contains('block')) {
        c3.classList.remove('block');
        c3.classList.add('hidden');
    }  
    if (back.classList.contains('block')) {
        back.classList.remove('block');
        back.classList.add('hidden');
    }
    if (back2.classList.contains('hidden')) {
        back2.classList.remove('hidden');
        back2.classList.add('block');
    } 

   
});

document.getElementById('back2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    
    if (back2.classList.contains('block')) {
        back2.classList.remove('block');
        back2.classList.add('hidden');
    } 
    if (c2.classList.contains('block')) {
        c2.classList.remove('block');
        c2.classList.add('hidden');
    }
    if (continue2.classList.contains('block')) {
        continue2.classList.remove('block');
        continue2.classList.add('hidden');
    }
    if (continue1.classList.contains('hidden')) {
        continue1.classList.remove('hidden');
        continue1.classList.add('block');
    }
    

    
});




