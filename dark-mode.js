const containerSwitch = document.createElement('div');
containerSwitch.style.position = 'relative';
containerSwitch.style.display = 'inline-block';
containerSwitch.style.width = '60px';
containerSwitch.style.height = '34px';

const switchMode = document.createElement('input');
switchMode.setAttribute('type', 'checkbox');
switchMode.id = 'modeToggle';
switchMode.style.opacity = '0';
switchMode.style.width = '0';
switchMode.style.height = '0';

const modeLabel = document.createElement('label');
modeLabel.setAttribute('for', 'modeToggle');
modeLabel.style.position = 'absolute';
modeLabel.style.top = '0'; //Si se quiere cambiar de lugar el switch. Es aca.
modeLabel.style.left = '0';
modeLabel.style.right = '0';
modeLabel.style.bottom = '0';
modeLabel.style.backgroundColor = '#ffffa2';
modeLabel.style.borderRadius = '34px';
modeLabel.style.border = '1px solid #333'
modeLabel.style.cursor = 'pointer';
modeLabel.style.transition = 'background-color 0.3s';

const switchIndicator = document.createElement('span');
switchIndicator.id = 'switchIcon';
switchIndicator.style.position = 'absolute';
switchIndicator.style.height = '26px';
switchIndicator.style.width = '26px';
switchIndicator.style.left = '4px';
switchIndicator.style.bottom = '4px';
switchIndicator.style.backgroundColor = '#ffff00';
switchIndicator.style.borderRadius = '50%';
switchIndicator.style.transition = 'transform 0.3s';
switchIndicator.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path><path d="M6.343 17.657l-1.414 1.414"></path><path d="M6.343 6.343l-1.414 -1.414"></path><path d="M17.657 6.343l1.414 -1.414"></path><path d="M17.657 17.657l1.414 1.414"></path><path d="M4 12h-2"></path><path d="M12 4v-2"></path><path d="M20 12h2"></path><path d="M12 20v2"></path></svg>';

modeLabel.appendChild(switchIndicator);
containerSwitch.appendChild(switchMode);
containerSwitch.appendChild(modeLabel);

document.body.appendChild(containerSwitch);

switchMode.addEventListener('change', () => {
    if (switchMode.checked) {
        switchIndicator.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>';
        switchIndicator.style.left = 'calc(100% - 30px)';
        switchIndicator.style.backgroundColor = '#7aa6a7';
        modeLabel.style.backgroundColor = '#b7e5e5';
        switchIndicator.style.transform = 'translateX(2px)';
        document.body.style.backgroundColor = '#333'; //Cambiar el color de MODO OSCURO al que se quiera.
    } else {
        switchIndicator.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path><path d="M6.343 17.657l-1.414 1.414"></path><path d="M6.343 6.343l-1.414 -1.414"></path><path d="M17.657 6.343l1.414 -1.414"></path><path d="M17.657 17.657l1.414 1.414"></path><path d="M4 12h-2"></path><path d="M12 4v-2"></path><path d="M20 12h2"></path><path d="M12 20v2"></path></svg>';
        switchIndicator.style.left = '4px';
        switchIndicator.style.backgroundColor = '#ffff00';
        modeLabel.style.backgroundColor = '#ffffa2';
        switchIndicator.style.transform = 'translateX(0)';
        document.body.style.backgroundColor = '#fef6cd'; //Cambiar el color de MODO CLARO al que se quiera.
    }
})