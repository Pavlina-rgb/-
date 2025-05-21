'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('скрипт отработал') 
});
document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('modalWindow');
        const openBtn = document.getElementById('openModal');
        const closeBtn = document.getElementById('closeModal');
        
        openBtn.addEventListener('click', function() {
            modal.removeAttribute('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        closeBtn.addEventListener('click', function() {
            modal.setAttribute('hidden', 'true');
            document.body.style.overflow = '';
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.setAttribute('hidden', 'true');
                document.body.style.overflow = '';
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
                modal.setAttribute('hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    });