document.getElementById('bar').addEventListener('click', function (){
                       
    document.getElementById('bar').classList.add('hidden');
    document.getElementById('cross').classList.remove('hidden');
    
    document.getElementById('menuDropdown').classList.remove('hidden');


 })

 document.getElementById('cross').addEventListener('click', function (){
    
    document.getElementById('cross').classList.add('hidden');
    document.getElementById('bar').classList.remove('hidden');
    
    document.getElementById('menuDropdown').classList.add('hidden');


 })