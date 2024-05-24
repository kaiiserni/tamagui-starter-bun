import {
  Anchor,
  Button,
  H1,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  useToastController,
  CustomToast,
  ToastViewport,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useSheetOpen } from '../../atoms/sheet'
import { ThemeToggle } from 'app/components/theme/Toggle'

// if using app router
// import { useLink } from 'solito/navigation'
// if using pages router
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/kaiiserni',
  })

  return (
    <ScrollView>
      <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
        <YStack gap="$4" bc="$background">
          <H1 ta="center">Welcome to Tamagui.</H1>
          <Paragraph ta="center">
            Here's a basic starter to show navigating from one screen to
            another. This screen uses the same code on Next.js and React Native.
          </Paragraph>

          <Separator />
          <Paragraph ta="center">
            Made possible by{' '}
            <Anchor
              color="$color12"
              href="https://twitter.com/natebirdman"
              target="_blank"
            >
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
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
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
