gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDTitlescreenObjects1= [];
gdjs.Title_32ScreenCode.GDTitlescreenObjects2= [];
gdjs.Title_32ScreenCode.GDLogoObjects1= [];
gdjs.Title_32ScreenCode.GDLogoObjects2= [];
gdjs.Title_32ScreenCode.GDStartGameObjects1= [];
gdjs.Title_32ScreenCode.GDStartGameObjects2= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition1IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9868084);
}
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Music2.mp3", 1, true, 25, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.Title_32ScreenCode.GDStartGameObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDStartGameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDStartGameObjects1[i].getBehavior("Flash").Flash(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitlescreenObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitlescreenObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
