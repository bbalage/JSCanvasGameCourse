class Scene {

    constructor() { }

    handleInputCtx() { console.log("Warning: defaulting scene function..."); }
    update() { console.log("Warning: defaulting scene function..."); }
    render() { console.log("Warning: defaulting scene function..."); }
    shouldQuit() { console.log("Warning: defaulting scene function..."); }
}

class ScenePlay extends Scene {

    constructor() { super(); }

    handleInputCtx() { console.log("Handling input."); }
    update() { console.log("Updating."); }
    render() { console.log("Rendering.") }
    shouldQuit() { return false; }
}