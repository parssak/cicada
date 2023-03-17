import { Button, Text, ThemeProvider } from "@parssa/universal-ui";
import { FAQ } from "components/FAQ";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <nav className="py-4">
        <div className="container flex items-center justify-between">Cicada</div>
      </nav>
      {/* <div className="min-h-[50vh] grid place-items-center">
        <div className="container text-center">
          <Text variant="h1" className="font-bold">
            Write CI in TypeScript
          </Text>
          <Text className="mt-size-2y text-theme-muted max-w-sm mx-auto">
            <span className="font-medium">Cicada</span> allows you to write and deploy your CI with
            the power of TypeScript.
          </Text>
          <Button className="mt-size-4y" theme="info">
            Join Waitlist
          </Button>
        </div>
      </div> */}

      <div className="bg-black">
        <ThemeProvider
          dark={true}
          theme="info"
          className="bg-theme-base/20 border-y border-theme-base/50"
        >
          <div className="container py-36  max-w-screen-xl">
            <div className="flex flex-col gap-12 lg:flex-row items-center">
              <div className="max-w-lg text-center lg:text-left flex  flex-col items-stretch mx-auto lg:mx-0 lg:items-start">
                <Text variant="h1" className="max-w-lg ">
                  Write CI in TypeScript
                </Text>
                <Text className="mt-size-2y text-theme-muted max-w-[15rem] mx-auto lg:mx-0 lg:max-w-xs">
                  <span className="lg:hidden">
                    Bring the power of TypeScript to your CI pipeline
                  </span>
                  <span className="hidden lg:inline">
                    Cicada allows you to write and deploy your CI with the power of TypeScript.
                  </span>
                </Text>

                <ul className="my-size-2y hidden lg:block">
                  {[
                    "Statement completion",
                    "Real-time type checking",
                    "Interactive documentation out of the box",
                    "Easy to set up"
                  ].map((item) => (
                    <Text as="li" key={item}>
                      <span className="text-theme-primary">✔</span> {item}
                    </Text>
                  ))}
                </ul>
                <Button size="lg" className="mt-size-4y">
                  Join Waitlist
                </Button>
              </div>
              <div data-theme="info" className="md:max-w-md mx-auto lg:ml-auto w-full relative">
                <div className="absolute inset-0 bg-theme-base opacity-50 blur-xl" />

                <Image
                  className="relative"
                  src="/images/ci-code.png"
                  width={898}
                  height={800}
                  alt="CI Code"
                />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>

      <div className="container max-w-screen-xl py-24">
        <Text variant="h2">What is Cicada?</Text>
        <Text className="mt-size-2y text-theme-muted">
          Cicada is a CI platform that allows you to write your CI in TypeScript. Cicada aims to be
          the best way to set up CI for your projects.
        </Text>
      </div>
      <div className="container max-w-screen-xl py-24 border-y border-theme-base">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-96 bg-theme-base rounded border border-theme-base/50"></div>
          <div>
            <Text variant="h2">Write Once, Deploy Anywhere</Text>
            <Text className="mt-size-2y text-theme-muted max-w-md">
              Deploy your CI to any CI platform with a single command. Cicada will support{" "}
              <span className="font-medium">GitHub Actions</span>,{" "}
              <span className="font-medium">CircleCI</span>, and more.
            </Text>
          </div>
        </div>
      </div>

      <div
        data-theme="info"
        className="container max-w-screen-xl py-12 md:py-16 grid gap-3 md:grid-cols-3"
      >
        <div className="h-96 p-8 bg-theme-base/20 rounded border border-theme-base/50 md:col-span-2">
          <Text variant="h4">Write builds once, run them anywhere</Text>
          <Text size="sm" className="mt-size-2y text-theme-muted">
            Cicada allows you to write your CI in TypeScript. Cicada aims to be the best way to set
            up CI for your projects.
          </Text>
          <Text size="sm" className="mt-size-2y text-theme-muted">
            It doesn't matter if you're using GitHub Actions, CircleCI, or any other CI platform.
            You can write your CI once, and deploy it anywhere. Same config, same code, everywhere.
          </Text>
        </div>
        <div className="h-96 p-8 bg-theme-base/20 rounded border border-theme-base/50">
          <Text variant="h4">Run and test locally</Text>
          <Text size="sm" className="mt-size-2y text-theme-muted">
            Cicada allows you to write your CI in TypeScript. Cicada aims to be the best way to set
            up CI for your projects.
          </Text>
          <Text size="sm" className="mt-size-2y text-theme-muted">
            It doesn't matter if you're using GitHub Actions, CircleCI, or any other CI platform.
            You can write your CI once, and deploy it anywhere. Same config, same code, everywhere.
          </Text>
        </div>
      </div>

      <FAQ />
    </div>
  );
}
