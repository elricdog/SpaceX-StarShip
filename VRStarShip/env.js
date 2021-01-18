var url = window.location.href;
console.log("Base URL: " + url);
if (url.startsWith("https://127.0.0.1"))
{
	// Environment Configurations for development
	console.log("Setting Environment Configurations for development");
	_debugStats = true;
	_debugShadow = false;
	_debugDimensionGrids = false;
	_debugCubeReference = true;
	_debugHumanReference = true;
	_debugDragonReference = true;
	_debugLog = true;
	_debugFixedCameras = false;
	_debugShowWingsAxis = false;

	_controlsType = "map";
	_hideHelpInitially = true;			
	_shadowsOffInitially = false;
	_enginesOffInitially = false;
}
else if (url.startsWith("https://192.168.1.2"))
{
	// Environment Configurations for test on Oculus Quest 2
	console.log("Environment Configurations for test on Oculus Quest 2");
	_debugStats = true;
	_debugShadow = false;
	_debugDimensionGrids = false;
	_debugCubeReference = false;
	_debugHumanReference = false;
	_debugDragonReference = false;
	_debugLog = false;
	_debugFixedCameras = false;
	_debugShowWingsAxis = false;

	_controlsType = "orbit";
	_hideHelpInitially = false;			
	_shadowsOffInitially = true;
	_enginesOffInitially = true;
}
else
{	
	// Customized Environment Configurations for release
	console.log("Setting Customized Environment Configurations for release");
	_debugStats = false;
	_debugShadow = false;
	_debugDimensionGrids = false;
	_debugCubeReference = false;
	_debugHumanReference = true;
	_debugDragonReference = true;
	_debugLog = false;
	_debugFixedCameras = false;
	_debugShowWingsAxis = false;

	_controlsType = "orbit";
	_hideHelpInitially = false;
	_shadowsOffInitially = true;
	_enginesOffInitially = true;
}