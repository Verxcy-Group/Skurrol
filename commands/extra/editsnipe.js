module.exports = [{
  name: 'editsnipe',
  code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
    $description[$getChannelVar[esnipeOldMsg]]
    $addTimestamp
    $color[RANDOM]
    $onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing to snipe}{color: RED}]
    $onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing to snipe}{color: RED}]
    $suppressErrors[There is nothing to snipe yet]`
}, {
  name: 'esnipe',
  code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
    $description[$getChannelVar[esnipeOldMsg]]
    $addTimestamp
    $color[RANDOM]
    $onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing to snipe}{color: RED}]
    $onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing to snipe}{color: RED}]
    $suppressErrors[There is nothing to snipe yet]`
}]