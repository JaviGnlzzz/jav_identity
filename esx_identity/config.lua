Config                  = {}
Config.Locale = GetConvar('esx:locale', 'es')

Config.EnableCommands   = ESX.GetConfig().EnableDebug

Config.UseDeferrals     = false

Config.DateFormat       = 'DD/MM/YYYY'

Config.MaxNameLength    = 20 -- Max Name Length.
Config.MinHeight        = 120 -- 120 cm lowest height
Config.MaxHeight        = 220 -- 220 cm max height.
Config.LowestYear       = 1900 -- 112 years old is the oldest you can be.
Config.HighestYear      = 2003 -- 18 years old is the youngest you can be.

Config.FullCharDelete   = true -- Delete all reference to character.
Config.EnableDebugging  = ESX.GetConfig().EnableDebug -- prints for debugging :)
