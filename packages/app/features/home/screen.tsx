import {
  Anchor,
  Button,
  H1,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  XStack,
  YStack,
  useToastController,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
// import { ThemeToggle } from 'app/components/theme/Toggle'
import { useState } from 'react'
import { useSheetOpen } from '../../atoms/sheet'

// if using app router
// import { useLink } from 'solito/navigation'
// if using pages router
import { ThemeToggle } from 'app/components/theme/Toggle'
import { useLink } from 'solito/link'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkProps = useLink({
    href: '/user/kaiiserni',
  })

  return (
    <ScrollView>
      <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
        <YStack gap="$4" bc="$background">
          <H1 ta="center">Welcome to Tamagui.</H1>
          <Paragraph ta="center">
            Here's a basic starter to show navigating from one screen to another. This screen uses
            the same code on Next.js and React Native.
          </Paragraph>

          <Separator />
          <Paragraph ta="center">
            Made possible by{' '}
            <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman
            </Anchor>
          </Paragraph>
        </YStack>

        <XStack gap="$5">
          <ThemeToggle />
          <Button {...linkProps}>Link to user</Button>
        </XStack>

        {/* remove next two lines if using pages router */}
        {/* <CustomToast /> */}
        {/* <ToastViewport left={0} right={0} top={10} /> */}

        <SheetDemo />
      </YStack>
    </ScrollView>
  )
}

function SheetDemo() {
  const toast = useToastController()
  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle bg="$gray8" />
        <Sheet.Frame ai="center" jc="center" gap="$10" bg="$color2">
          <XStack gap="$2">
            <Paragraph ta="center">Made by</Paragraph>
            <Anchor col="$blue10" href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman,
            </Anchor>
            <Anchor
              color="$purple10"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </XStack>

          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
