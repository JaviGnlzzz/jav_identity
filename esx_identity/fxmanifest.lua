fx_version 'cerulean'

game 'gta5'

description 'Identity by Javi'

lua54 'yes'

version '1.9.0'

shared_scripts {
	'@es_extended/imports.lua',
	'@es_extended/locale.lua',
}

server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'locales/*.lua',
	'config.lua',
	'server/main.lua'
}

client_scripts {
	'locales/*.lua',
	'config.lua',
	'client/main.lua'
}

ui_page 'html/index.html'

files {
    'html/**/**/*.*'
}

dependency 'es_extended'