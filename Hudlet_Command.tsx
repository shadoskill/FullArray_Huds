import Post from "../../components/Elements/Post";

export const doCommand = async(channel: number, command: string)=>{
    await Post("Huds/DoCommand", {command: JSON.stringify({channel: channel, command: command})});
}