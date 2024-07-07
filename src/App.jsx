import { useState } from "react";
import { IntlProvider } from "react-intl";

import TransferPanel from "./components/TransferPanel";
import { flattenMessages } from "./utils/helpers";
import messages from "./locales";

const App = () => {
  const [locale] = useState("en");

  return (
    <IntlProvider
      messages={flattenMessages(messages[locale])}
      locale={locale}
      defaultLocale="en"
    >
      <main className="flex size-full items-center justify-center overflow-hidden bg-primaryBg">
        <TransferPanel />
      </main>
    </IntlProvider>
  );
};

export default App;
